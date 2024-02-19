export default (error, req, res, next) => {
  const errors = error.message.split(",");
  return res.status(400).json({ succss: false, messages: errors });
};
