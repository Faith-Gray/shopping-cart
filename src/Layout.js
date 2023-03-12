import { Outlet } from "react-router-dom";
import SortBar from "./Components/SortBar/SortBar";
import PageTitle from "./Components/PageTitle/PageTitle";

const Layout = ({isSmallerGridSelected, setIsSmallerGridSelected, isModalOpen, setIsModalOpen}) => {
  return (
    <>
        <PageTitle />
        <SortBar isSmallerGridSelected={isSmallerGridSelected} setIsSmallerGridSelected={setIsSmallerGridSelected} 
          isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <Outlet />
    </>
  );
};

export default Layout;