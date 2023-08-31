const Loader = () => {
    return (
      <section className=" min-h-screen w-screen h-screen z-50 fixed  ">
        <div className="h-[50%] bg-red-600 "></div>
        <div className="h-[50%] dark:bg-black bg-white ">
          {/* <div className="h-16 aspect-square bg-white rounded-full absolute right-0 -translate-x-1/2 -top-6 border-[8px] border-black after:block after:content-[''] after:h-8 after:aspect-square after:bg-slate-800 after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black"></div> */}
  
          <div className="relative  ">
          <div className="absolute -bottom-32 right-1/2 translate-x-1/2 w-[400px]  ">
            <img className="w-full h-full" src="/pokedexGif.gif" alt="" />
          </div>
  
          <div className="absolute bottom-1/2 -translate-y-[140px] right-1/2 translate-x-1/2 min-w-[300px] px-4  ">
            <img className="w-full h-full" src="/images/banner.png" alt="" />
          </div>
          </div>
        </div>
      </section>
    );
  };
  export default Loader;