import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";

const HomeLayout = () => {
  return (
    <div className="bg-slate-100/20">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
