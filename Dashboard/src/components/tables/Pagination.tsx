const Pagination = () => {
  return (
    <div className="flex justify-between items-center pt-4">
      <div className="flex gap-3 items-center">
        <select name="perPage" className="select !w-auto">
          <option value="10">10</option>
          <option value="30">20</option>
          <option value="50">50</option>
        </select>
        <span className="text-black/70 capitalize text-sm">item per page</span>
        <span className="text-black/80 capitalize text-sm">
          1-20 of 200 items
        </span>
      </div>
      <div className="flex gap-3 items-center text-sm">
        <select name="pageNumber" className="select !w-auto">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="....">....</option>
          <option value="20">20</option>
        </select>
        <span>of 40 pages</span>
      </div>
    </div>
  );
};

export default Pagination;
