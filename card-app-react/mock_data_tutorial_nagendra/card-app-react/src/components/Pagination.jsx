import React from "react";

const Pagination = ({ setPage }) => {
  const paginationNext = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center items-center">
      <button
        className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
        onClick={paginationNext}
      >
        Load More
      </button>
        
    </div>
  );
};

export default Pagination;