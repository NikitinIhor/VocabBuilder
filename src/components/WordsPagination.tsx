import { useEffect, useState } from "react";

interface WordsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PAGE_GROUP_SIZE = 10;

const WordsPagination: React.FC<WordsPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [pageGroupStart, setPageGroupStart] = useState(1);

  useEffect(() => {
    const newGroupStart =
      Math.floor((currentPage - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1;
    if (newGroupStart !== pageGroupStart) {
      setPageGroupStart(newGroupStart);
    }
  }, [currentPage, pageGroupStart]);

  const smallWindowStart = currentPage;
  const smallWindowEnd = Math.min(
    currentPage + 1,
    pageGroupStart + PAGE_GROUP_SIZE - 1,
    totalPages
  );

  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const goToFirstPage = () => {
    onPageChange(1);
    setPageGroupStart(1);
  };

  const goToLastPageGroup = () => {
    const newGroupStart = pageGroupStart + PAGE_GROUP_SIZE;
    if (newGroupStart <= totalPages) {
      setPageGroupStart(newGroupStart);
      onPageChange(newGroupStart);
    } else {
      const lastGroupStart =
        Math.floor((totalPages - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1;
      setPageGroupStart(lastGroupStart);
      onPageChange(totalPages);
    }
  };

  const goToPrevPageGroup = () => {
    const newGroupStart = pageGroupStart - PAGE_GROUP_SIZE;
    if (newGroupStart >= 1) {
      setPageGroupStart(newGroupStart);
      onPageChange(newGroupStart);
    }
  };

  return (
    <div className="container">
      <div
        className="flex items-center space-x-2 justify-between mx-auto
      md:w-[368px]"
      >
        <button
          onClick={goToFirstPage}
          className="w-8 h-8 flex items-center justify-center rounded-lg border bg-white text-gray-600 hover:bg-gray-100"
        >
          &laquo;
        </button>

        <button
          onClick={prevPage}
          className="w-8 h-8 flex items-center justify-center rounded-lg border bg-white text-gray-600 hover:bg-gray-100"
        >
          &lsaquo;
        </button>

        <button
          onClick={() => onPageChange(1)}
          className={`w-8 h-8 flex items-center justify-center rounded-lg border ${
            currentPage === 1
              ? "bg-teal-600 text-white font-semibold"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          1
        </button>

        {pageGroupStart > 1 && (
          <button
            onClick={goToPrevPageGroup}
            className="w-8 h-8 flex items-center justify-center rounded-lg border bg-white text-gray-600 hover:bg-gray-100"
          >
            ...
          </button>
        )}

        {[smallWindowStart, smallWindowEnd]
          .filter(
            (page) => page !== 1 && page !== totalPages && page <= totalPages
          )
          .map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg border ${
                currentPage === page
                  ? "bg-teal-600 text-white font-semibold"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

        {pageGroupStart + PAGE_GROUP_SIZE - 1 < totalPages && (
          <button
            onClick={goToLastPageGroup}
            className="w-8 h-8 flex items-center justify-center rounded-lg border bg-white text-gray-600 hover:bg-gray-100"
          >
            ...
          </button>
        )}

        {totalPages > 1 && (
          <button
            onClick={() => onPageChange(totalPages)}
            className={`w-8 h-8 flex items-center justify-center rounded-lg border ${
              currentPage === totalPages
                ? "bg-teal-600 text-white font-semibold"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            {totalPages}
          </button>
        )}

        <button
          onClick={nextPage}
          className="w-8 h-8 flex items-center justify-center rounded-lg border bg-white text-gray-600 hover:bg-gray-100"
          disabled={currentPage === totalPages}
        >
          &rsaquo;
        </button>

        <button
          onClick={() => {
            const lastGroupStart =
              Math.floor((totalPages - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE +
              1;
            setPageGroupStart(lastGroupStart);
            onPageChange(totalPages);
          }}
          className="w-8 h-8 flex items-center justify-center rounded-lg border bg-white text-teal-600 hover:bg-gray-100"
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default WordsPagination;
