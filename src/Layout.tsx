import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function Layout() {
  return (
    <main>
      <Navbar />
      <div className="fixed left-0 top-0 h-screen w-screen -z-10">
        <img
          src="/marvel.jpg"
          alt="bg"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <section className="mb-12">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default Layout;
