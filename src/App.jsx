import Header from "./components/layout/header/index";
import { Outlet } from "react-router-dom";
import DefaultLayout from "./layout";
import SectionLayout from "./layout/section";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-custom-background-dark dark:bg-custom-background-dark text-custom dark:text-custom-dark">
        <DefaultLayout>
          <SectionLayout>
            <Outlet />
          </SectionLayout>
        </DefaultLayout>
      </div>
    </div>
  );
}
export default App;
