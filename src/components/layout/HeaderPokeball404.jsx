import { useNavigate } from "react-router-dom";

const HeaderPokeball404 = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <section>
      <header className="">
        <div className="h-16 bg-red-600  relative ">
          <div className="absolute left-0 bottom-0 w-[210px] sm:w-[300px] ml-3">
            <img src="/images/banner.png" alt="" />
          </div>
        </div>
        <div className="h-12 bg-black dark:bg-white relative  ">
          <button
            onClick={handleLogout}
            className="mr-3 animate-bounce h-10 w-10 aspect-square bg-black  rounded-full absolute right-0 -translate-x-1/2 -top-8 border-[8px] border-white after:block after:content-[''] after:h-8 after:aspect-square after:bg-transparent after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black sm:h-16 sm:w-16 "
          >
            <i className="text-red-600 text-[25px] sm:text-3xl bx bxs-log-in-circle bx-rotate-180"></i>
          </button>

          {/* inicio de mi dark */}
        </div>
      </header>
    </section>
  );
};
export default HeaderPokeball404;
