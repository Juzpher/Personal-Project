import { Link } from "react-router-dom";
import { Button } from "../../common/Button/button-variants";

const DesktopNav = ({ menuItems }) => {
  return (
    <nav>
      <ul className="flex items-center space-x-8">
        <li>
          {menuItems.map((item) => (
            <Button variant="ghost" key={item.label}>
              <Link to={item.path}>{item.label}</Link>
            </Button>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
