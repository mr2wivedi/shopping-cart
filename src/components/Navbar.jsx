import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const cart =useSelector((state)=>state.cart)
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-4xl mx-auto">
        <NavLink to="/">
          <img src="../logo.png" alt="" className="h-14 ml-5" />
        </NavLink>
        <div className="flex text-slate-100 items-center font-medium mr-5 gap-x-3">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
            <FaShoppingCart className="text-2xl" />
            {
              cart.length > 0 &&
              <span
              className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce text-white">{cart.length}</span>
            }
            </div>
            
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
