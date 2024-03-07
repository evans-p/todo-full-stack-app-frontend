import { FaGlobe } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen h-16 flex justify-between items-center">
      <section>Logo</section>
      <section className="flex justify-between items-center">
        <span className="flex ml-2 mr-2">
          <FaGlobe className="text-gray-800 text-2xl cursor-pointer" />
          <select>
            <option>123</option>
            <option>123</option>
            <option>123</option>
          </select>
        </span>
        <FaGlobe className="text-gray-800 text-2xl mr-2 cursor-pointer" />
        <FaRegUserCircle className="text-gray-800 text-4xl mr-2 cursor-pointer" />
      </section>
    </nav>
  );
};

export default Nav;
