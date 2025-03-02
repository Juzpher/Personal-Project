import { Link } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];
const Header = () => {
  return (
    <header className="navbar bg-custom-background-dark dark:bg-custom-background-dark shadow-custom dark:shadow-custom-dark fixed top-0 z-50 w-full">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex-1">
          <Link to="/" className="text-custom-dark">
            Your Logo
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <DesktopNav menuItems={menuItems} />
          {/*
            <ThemeToggle /> */}
        </div>
        <div className="lg:hidden flex items-center gap-4">
          {/*
            <ThemeToggle /> */}
          <MobileNav menuItems={menuItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
