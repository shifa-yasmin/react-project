const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-8">

      <button
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-xl font-medium ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-pink-500 text-white hover:bg-pink-600"
        }`}
      >
        Previous
      </button>

      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index + 1}
            onClick={() =>
              setCurrentPage(index + 1)
            }
            className={`w-10 h-10 rounded-xl font-semibold ${
              currentPage === index + 1
                ? "bg-pink-500 text-white"
                : "bg-white border border-pink-200 text-pink-500 hover:bg-pink-100"
            }`}
          >
            {index + 1}
          </button>
        )
      )}

      <button
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-xl font-medium ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-pink-500 text-white hover:bg-pink-600"
        }`}
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;