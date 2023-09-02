import HeaderPokeball404 from "../components/layout/HeaderPokeball404";

export const Page404 = () => {
  return (
    <div className="bg-red-500 h-screen w-screen  bg-[url('/page404.gif')] bg-cover bg-center">
      <HeaderPokeball404 />
      <h2 className=" text-center text-red-50 text-5xl  h-[80vh] flex justify-center items-center">
        ! ERROR 404 !
      </h2>
    </div>
  );
};
