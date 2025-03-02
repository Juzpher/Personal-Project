import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-8">
        <li>
          <Link
            to="/"
            className="text-custom dark:text-custom-dark hover:text-custom-accent dark:hover:text-custom-accent-dark custom-transition px-2 py-1"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-custom dark:text-custom-dark hover:text-custom-accent dark:hover:text-custom-accent-dark custom-transition px-2 py-1"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="text-custom dark:text-custom-dark hover:text-custom-accent dark:hover:text-custom-accent-dark custom-transition px-2 py-1"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-custom dark:text-custom-dark hover:text-custom-accent dark:hover:text-custom-accent-dark custom-transition px-2 py-1"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
