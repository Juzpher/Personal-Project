import { Link } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ThemeToggle from "../../toggles/ThemeToggle";

const Header = () => {
  return (
    <header className="navbar bg-custom-background dark:bg-custom-background-dark shadow-custom dark:shadow-custom-dark fixed top-0 z-50 w-full">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex-1">
          <Link
            to="/"
            className="bg-custom-accent hover:bg-custom-accent-effects dark:bg-custom-accent-dark text-custom-dark dark:text-custom px-4 py-2 rounded-lg custom-transition custom-ease text-xl"
          >
            Your Logo
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <DesktopNav />
          {/*
            <ThemeToggle /> */}
        </div>
        <div className="lg:hidden flex items-center gap-4">
          {/*
            <ThemeToggle /> */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
