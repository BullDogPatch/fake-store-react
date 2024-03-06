import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-solid border-b-red-600">
      <nav className="text-black text-center font-bold uppercase  dark:border-b-red-600 dark:bg-gray-900  dark:text-white  w-full">
        <h2 className="p-4 text-2xl">this is a nav</h2>
      </nav>
    </header>
  );
};

export default Navbar;
