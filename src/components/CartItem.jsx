import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="min-w-full flex gap-x-5 p-5 border-b-2 border-gray-800">
      <div className="h-[150px] w-[350px]">
        <img src={item.image} alt="" className="h-full w-full " />
      </div>
      <div className="w-screen ">
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {item.title}{" "}
        </p>
        <p className="text-gray-500 text-md">
          {" "}
          {item.description.split(" ").splice(0, 10).join(" ") + "..."}
        </p>
        <div className="flex justify-between items-center mt-5">
          <p className="text-green-600 font-semibold text-lg">${item.price}</p>
          <MdDelete
            className="bg-red-300 w-8 h-8 p-[6px] text-red-900 rounded-full "
            onClick={() => {
              dispatch(remove(item.id));
              toast.error("Item Removed from cart");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
