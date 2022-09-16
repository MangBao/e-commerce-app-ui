const RightHeader = () => {
  return (
    <div className="col lg:w-1/5 w-2/6 flex justify-center">
      <div className="items-center flex shrink-0 mx-2.5 xl:mx-3.5">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-dark text-opacity-40"
        >
          <path
            d="M20.9001 11C20.9001 5.52836 16.4723 1.09998 11.0001 1.09998C5.52848 1.09998 1.1001 5.52775 1.1001 11C1.1001 16.4231 5.49087 20.9 11.0001 20.9C16.4867 20.9 20.9001 16.448 20.9001 11ZM11.0001 2.26013C15.8193 2.26013 19.7399 6.1808 19.7399 11C19.7399 12.7629 19.2156 14.4573 18.2432 15.8926C14.3386 11.6924 7.66873 11.6849 3.75698 15.8926C2.78459 14.4573 2.26025 12.7629 2.26025 11C2.26025 6.1808 6.18092 2.26013 11.0001 2.26013ZM4.48056 16.8201C7.95227 12.926 14.0488 12.9269 17.5195 16.8201C14.0361 20.7172 7.96541 20.7184 4.48056 16.8201Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.2"
          ></path>
          <path
            d="M11 11.5801C12.9191 11.5801 14.4805 10.0187 14.4805 8.09961V6.93945C14.4805 5.02036 12.9191 3.45898 11 3.45898C9.08091 3.45898 7.51953 5.02036 7.51953 6.93945V8.09961C7.51953 10.0187 9.08091 11.5801 11 11.5801ZM8.67969 6.93945C8.67969 5.65996 9.7205 4.61914 11 4.61914C12.2795 4.61914 13.3203 5.65996 13.3203 6.93945V8.09961C13.3203 9.3791 12.2795 10.4199 11 10.4199C9.7205 10.4199 8.67969 9.3791 8.67969 8.09961V6.93945Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.2"
          ></path>
        </svg>
        <button
          className="text-sm font-normal lg:text-15px text-brand-dark focus:outline-none ltr:ml-2 rtl:mr-2"
          aria-label="Authentication"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default RightHeader;
