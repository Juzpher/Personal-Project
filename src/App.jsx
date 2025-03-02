import Header from "./components/layout/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-custom-background dark:bg-custom-background-dark text-custom dark:text-custom-dark">
      <Header />
      <div className="container px-4 pt-20 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
export default App;
