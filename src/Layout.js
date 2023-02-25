import { Outlet } from "react-router-dom";
import SortBar from "./Components/SortBar/SortBar";
import PageTitle from "./Components/PageTitle/PageTitle";

const Layout = () => {
  return (
    <>
        <PageTitle />
        <SortBar />
        <Outlet />
    </>
  );
};

export default Layout;