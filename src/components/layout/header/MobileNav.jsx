import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 hover:bg-custom-background-effects dark:hover:bg-custom-background-dark rounded-lg custom-transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-custom dark:text-custom-dark"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 w-48 bg-custom-background dark:bg-custom-background-dark p-4 shadow-custom dark:shadow-custom-dark z-50 rounded-lg">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-custom dark:text-custom-dark hover:bg-custom-accent hover:text-custom-dark dark:hover:bg-custom-accent-dark rounded-lg custom-transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-custom dark:text-custom-dark hover:bg-custom-accent hover:text-custom-dark dark:hover:bg-custom-accent-dark rounded-lg custom-transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block px-4 py-2 text-custom dark:text-custom-dark hover:bg-custom-accent hover:text-custom-dark dark:hover:bg-custom-accent-dark rounded-lg custom-transition"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-custom dark:text-custom-dark hover:bg-custom-accent hover:text-custom-dark dark:hover:bg-custom-accent-dark rounded-lg custom-transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
