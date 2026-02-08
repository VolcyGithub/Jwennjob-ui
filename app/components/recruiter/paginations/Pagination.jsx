const Pagination = () => {
  return (
    <div className="flex items-center mt-2 gap-2">
      <button type="button" aria-label="Previous" className="mr-4">
        <svg
          width="9"
          height="16"
          viewBox="0 0 12 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1L2 9.24242L11 17"
            stroke="#111820"
            strokeOpacity="0.7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="flex gap-2 text-gray-500 text-sm md:text-md">
        <button
          type="button"
          className="flex items-center justify-center active:scale-95 w-8 md:w-10 h-8 md:h-10 aspect-square bg-white border border-gray-200 rounded-full hover:bg-gray-100/70 transition-all"
        >
          1
        </button>
        <button
          type="button"
          className="flex items-center justify-center active:scale-95 w-8 md:w-10 h-8 md:h-10 aspect-square bg-primary text-white rounded-full transition-all"
        >
          2
        </button>
        <button
          type="button"
          className="flex items-center justify-center active:scale-95 w-8 md:w-10 h-8 md:h-10 aspect-square bg-white border border-gray-200 rounded-full hover:bg-gray-100/70 transition-all"
        >
          3
        </button>
        <button
          type="button"
          className="flex items-center justify-center active:scale-95 w-8 md:w-10 h-8 md:h-10 aspect-square bg-white border border-gray-200 rounded-full hover:bg-gray-100/70 transition-all"
        >
          4
        </button>
        <button
          type="button"
          className="flex items-center justify-center active:scale-95 w-8 md:w-10 h-8 md:h-10 aspect-square bg-white border border-gray-200 rounded-full hover:bg-gray-100/70 transition-all"
        >
          5
        </button>
        <button
          type="button"
          className="flex items-center justify-center active:scale-95 w-8 md:w-10 h-8 md:h-10 aspect-square bg-white border border-gray-200 rounded-full hover:bg-gray-100/70 transition-all"
        >
          6
        </button>
      </div>

      <button type="button" aria-label="Next" className="ml-4">
        <svg
          width="9"
          height="16"
          viewBox="0 0 12 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L10 9.24242L1 17"
            stroke="#111820"
            strokeOpacity="0.7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
