import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/footer";


const MainLayout = () => {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-1 min-h-screen">
             <Navbar/>
             <main className="flex-1 p-6 bg-gray-100">
                <Outlet/>
             </main>
             <Footer/>
        </div>
      </div>
    );
};

export default MainLayout