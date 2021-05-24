import React from "react";
import "./CustomPagination.css";
import Pagination from "@material-ui/lab/Pagination";

const CustomPagination = ({ setCurrentPage, totalPages, currentPage }) => {
  const handelPageChange = (e, v) => {
    // console.log(v);
    setCurrentPage(v);
  };
  return (
    <div className="pagination">
      <Pagination
        className="pagination__pages"
        color="primary"
        count={totalPages}
        page={currentPage}
        onChange={handelPageChange}
      />
    </div>
  );
};

export default CustomPagination;
