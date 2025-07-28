interface WordsPaginationProps {}

const WordsPagination: React.FC<WordsPaginationProps> = () => {
  return (
    <div className="container">
      <div className="flex items-center space-x-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
          &laquo;
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
          &lsaquo;
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-500 text-white font-semibold">
          1
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100">
          2
        </button>

        <span className="w-10 h-10 flex items-center justify-center text-gray-500">
          ...
        </span>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100">
          10
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
          &rsaquo;
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-teal-600 hover:bg-gray-100">
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default WordsPagination;
