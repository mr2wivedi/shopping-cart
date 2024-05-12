import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 ease-in gap-3 ml-5 p-4 mt-10 rounded-xl shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
      <div>
        <p className="text-gray-700 font-semibold text-md text-left truncate w-40 mt-1">
          {item.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {item.description.split(" ").splice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={item.image} alt="" className=" h-full w-full" />
      </div>

      <div className="flex justify-between gap-6 items-center w-full mt-5 mx-auto">
        <div>
          <p className="text-green-600 font-semibold">${item.price}</p>
        </div>
        {cart.some((i) => i.id === item.id) ? (
          <button className="text-gray-700 border-2 whitespace-nowrap border-gray-700 rounded-full font-semibold text-[12px] p-1 px-2 uppercase
          hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            onClick={() => {
              dispatch(remove(item.id));
              toast.error("Item Removed From Cart");
            }}
          >
            Remove from cart
          </button>
        ) : (
          <button
          className="text-gray-700 border-2  border-gray-700 rounded-full font-semibold text-[12px] p-1 px-2 uppercase
          hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            onClick={() => {
              dispatch(add(item));
              toast.success("Item Added Successfully");
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
