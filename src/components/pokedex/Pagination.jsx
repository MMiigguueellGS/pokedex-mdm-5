export const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {
  const FIRST_PAGE = 1;

  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };

  const handleLastPage = () => setCurrentPage(lastPage);

  const handlePreviusPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage - 1;
      if (newPage >= FIRST_PAGE) return newPage;
      return prevPage;
    });
  };

  const handleFirstPage = () => setCurrentPage(FIRST_PAGE);

  return (
    <ul className="flex justify-center  p-4 items-center dark:text-white font-bold text-xl my-2">
      {currentPage >= 2 && <li className="p-3 bg-red-500 border-r-2 hover:bg-red-400 cursor-pointer" onClick={handleFirstPage}>{"<<"}</li>}
      {currentPage >= 2 && <li className="p-3 bg-red-500  hover:bg-red-400 cursor-pointer" onClick={handlePreviusPage}>{"<"}</li>}

      {pagesInCurrentBlock.map((page) => (
        <li
          className={`p-3 hover:bg-red-400 cursor-pointer ${
            currentPage === page ? "text-white bg-red-700" : ""
          }`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}

      <li className="p-3 hover:bg-red-400 cursor-pointer bg-red-500 border-r-2" onClick={handleNextPage}>{">"}</li>
      <li className="p-3 hover:bg-red-400 cursor-pointer bg-red-500" onClick={handleLastPage}>{">>"}</li>
    </ul>
  );
};
