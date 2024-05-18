import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import RoutingConstants from "../constants/RoutingConstants";

const Logo = () => {
  return (
    <Link
      to={RoutingConstants.ROOT}
      className="fixed left-8 h-16 flex justify-center items-center z-50"
    >
      <img src={logo} alt="TaskForge" className="w-10 h-auto" />
    </Link>
  );
};

export default Logo;
