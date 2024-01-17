// eslint-disable-next-line react/prop-types
const Header = ({ selection }) => {
  const classExtra = selection ? "blur" : "";
  function scrollToCards() {
    var div = document.querySelector(".card");
    div.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  return (
    <div className={`container header text-center ${classExtra}`}>
      <div className="mt-4 logo text-4xl md:text-7xl font-crisis">AnyDo:&gt;</div>

      <div className="header-1 pt-6 md:mb-6 relative inline-flex items-center justify-center w-[100]">
        <button
          type="button"
          className="text-black  bg-pink-200 font-[595] rounded-full text-sm px-33 py-1 text-center mx-auto font-crisis"
        >
          Organize your day with ease: your personal to-do app
        </button>
      </div>

      <div className="header-2 flex flex-col justify-center items-center font-mono h-32">
        <p className="text-4xl md:text-7xl font-semibold">A better way to</p>
        <p className="text-4xl md:text-7xl font-semibold pt-2 md:pt-4">
          get things
          <span className="bg-pink-200 pl-2">done!</span>
        </p>
      </div>

      <div className="header-text text-[0.8rem] md:text-base md:pt-8 font-serif">
        <p className="pb-1 px-[2.5rem]">
          Just click on the box you want to add your task to and start with your
          day ahead!
        </p>
        <p className="pb-1">
          Your AnyDo:&gt; is waiting! Click Below to begin👇
        </p>
      </div>

      <div className="buttons pt-4 mb-6 mr-5 relative inline-flex items-center justify-center">
        <div
          onClick={scrollToCards}
          className="btn-1  transition duration-700 ease-in-out bg-gradient-to-r from-red-300 via-red-100 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-full px-7 md:px-10 py-3 md:py-3 mb-3 font-crisis font-[550] text-2xl md:text-3xl cursor-pointer "
        >
          Let&apos;s Begin!
        </div>
      </div>
    </div>
  );
};

export default Header;
