import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";

function Layout() {
  return (
    <main className="container">
      <Navbar />
      <div className="fixed left-0 top-0 h-screen w-screen -z-10">
        <img src="/marvel.jpg" alt="bg" className="h-full w-full object-cover" />
      </div>
      <section className="img-bg my-24">
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
