import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, currentValue) => (acc + currentValue.price), 0).toFixed(2)
    );
  }, [cart]);
  return (
    <div className="mb-5">
      {cart.length > 0 ? (
        <div className="max-w-6xl flex justify-between gap-x-12 mx-auto">
          <div className="max-w-3xl">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} index={index} />
            ))}
          </div>
          <div className="max-h-[620px] flex flex-col justify-between mr-12">
            <div className="flex flex-col mt-12">
              <div className="text-3xl font-semibold text-green-700">Your Cart</div>
              <div className="text-5xl font-bold text-green-700">Summary</div>
              <p className="text-2xl font-semibold text-green-700 mt-2">
                <span>Total Items : {cart.length} </span>
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-green-700 mt-2">Total Amount : ${totalAmount}</p>
              <button className="text-center bg-green-500 text-white w-full p-2 rounded-2xl mt-2">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mt-[250px] justify-center gap-y-4 items-center">
          <h1 className="text-2xl font-semibold text-gray-600">Cart Empty</h1>
          <NavLink to="/">
            <button className="text-xl rounded-2xl p-1 px-3 text-white bg-green-500">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
