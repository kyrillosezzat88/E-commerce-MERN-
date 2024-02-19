export const paginationData = (model, match = {}) => {
  return async (req, res, next) => {
    const { page = 1, limit = 10 } = req.query;

    const limitNumber = Number(limit);
    const pageNumber = Number(page);

    let result = await model.aggregate([
      {
        $match: match,
      },
      {
        $facet: {
          metaData: [
            {
              $count: "totalDocs",
            },
            {
              $addFields: {
                pageNumber: pageNumber,
                totalPages: { $ceil: { $divide: ["$totalDocs", limitNumber] } },
              },
            },
          ],
          data: [
            {
              $skip: (pageNumber - 1) * limitNumber,
            },
            {
              $limit: limitNumber,
            },
          ],
        },
      },
    ]);

    result = result[0];
    result.metaData = { ...result.metaData[0], count: result.data.length };

    res.status(200).json({
      ...result,
      success: true,
      message: "success",
    });

    next();
  };
};
