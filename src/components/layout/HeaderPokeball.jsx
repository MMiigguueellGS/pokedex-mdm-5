import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/trainer.slice";
import { useEffect, useState } from "react";

export const HeaderPokeball = ({ children }) => {
  //Dark
  const [eventsDark, setEventsDark] = useState(false);
  const [eventIcono, setEventIcono] = useState(null);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  //inicio de mi dark
  const handleChangeDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("dark");
      setEventsDark(false);
      setEventIcono(<i className="bx bx-moon  text-blue-400 text-3xl "></i>);
    } else {
      
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark", true);
      setEventsDark(true);
      setEventIcono(<i className="bx bx-sun  text-yellow-400 text-3xl "></i>);
    }
  };
  useEffect(()=>{
    if (document.documentElement.classList.contains("dark")) {
      setEventIcono(<i className="bx bx-moon  text-blue-400 text-3xl "></i>);
    }else{
      setEventIcono(<i className="bx bx-sun  text-yellow-400 text-3xl "></i>);
    }
    
  },[])

  const savedInfo = localStorage.getItem("dark");

  return (
    <section className="dark:bg-neutral-700">
      <header className="">
        <div className="h-16 bg-red-600  relative ">
          
          <div className="absolute left-0 bottom-0 w-[210px] sm:w-[300px] ml-3">
            <img src="/images/banner.png" alt="" />
          </div>
        </div>
        <div className="h-12 bg-black dark:bg-white relative  ">
          

          <button
            onClick={handleLogout}
            className="mr-3 animate-bounce h-16 aspect-square bg-black  rounded-full absolute right-0 -translate-x-1/2 -top-8 border-[8px] border-white after:block after:content-[''] after:h-8 after:aspect-square after:bg-transparent after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black "
          >
            <i className="text-red-600  text-2xl bx bxs-log-in-circle bx-rotate-180"></i>
          </button>

          {/* inicio de mi dark */}
          <button
            onClick={handleChangeDarkMode}
            className="mr-3 animate-bounce h-16 aspect-square bg-black  rounded-full absolute right-20 -translate-x-[100px] -top-8 border-[8px] border-white after:block after:content-[''] after:h-8 after:aspect-square after:bg-transparent after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black "
          >
            {eventIcono}
          </button>
        </div>
      </header>
      {children}
    </section>
  );
};