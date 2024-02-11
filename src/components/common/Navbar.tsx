import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Appearences",
    href: "/appearances",
  },
];
const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  useEffect(() => {
    let currentY = window.scrollY;
    const handleScroll = () => {
      let newY = window.scrollY;
      if (newY > currentY && currentY > 150) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
      currentY = newY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "w-full pt-3 fixed top-0 left-0 z-50 transition-transform duration-500 flex items-center justify-center gap-6",
        hideNavbar ? "-translate-y-[100%]" : "translate-y-0", "text-condensed"
      )}
    >
      <div className="flex items-center justify-center gap-6 bg-primary backdrop-blur-sm px-4 py-2 rounded-full">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.title}
            to={link.href}
            className={({ isActive }) =>
              isActive ? "bg-text text-primary px-3 rounded-full py-1" : "py-2"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
