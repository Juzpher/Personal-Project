import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <h1 className="text-4xl font-bold mb-4">Welcome to Home Page</h1>
            <p className="text-lg">This is the home page content.</p>
          </div>
        ),
      },
      {
        path: "/about",
        element: (
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg">Learn more about our company.</p>
          </div>
        ),
      },
      {
        path: "/services",
        element: (
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-lg">Explore our services.</p>
          </div>
        ),
      },
      {
        path: "/contact",
        element: (
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg">Get in touch with us.</p>
          </div>
        ),
      },
    ],
  },
]);

export default router;
