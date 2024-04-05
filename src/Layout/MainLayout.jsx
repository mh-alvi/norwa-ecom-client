import { Outlet } from "react-router-dom";
import LowerNavbar from "../components/shared/LowerNavbar";
import Footer from "../components/shared/Footer";
import UpperNavbar from "../components/shared/UpperNavbar";

const MainLayout = () => {
  return (
    <div>
      <UpperNavbar />
      <LowerNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
