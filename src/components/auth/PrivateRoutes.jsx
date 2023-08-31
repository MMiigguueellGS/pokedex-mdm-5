import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { HeaderPokeball } from "../layout/HeaderPokeball";

export const PrivateRoutes = () => {
  const { name } = useSelector((store) => store.trainer);

  if (name)
    return (
      <HeaderPokeball>
        <Outlet />
      </HeaderPokeball>
    );

  return <Navigate to="/" />;
};
