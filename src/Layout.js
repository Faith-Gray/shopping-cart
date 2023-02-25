import { Outlet } from "react-router-dom";
import SortBar from "./Components/SortBar/SortBar";
import PageTitle from "./Components/PageTitle/PageTitle";

const Layout = ({isSmallerGridSelected, setIsSmallerGridSelected}) => {
  return (
    <>
        <PageTitle />
        <SortBar isSmallerGridSelected={isSmallerGridSelected} setIsSmallerGridSelected={setIsSmallerGridSelected}/>
        <Outlet />
    </>
  );
};

export default Layout;