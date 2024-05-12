import { useEffect, useState } from "react";
import Product from "../components/Product"
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [ items , setitems] = useState([])
  const [loading , setLoading] = useState(false)

  


  useEffect(()=>{
    async function fetchProductsData(){
      setLoading(true)
  
      try {
        const res =  await fetch(API_URL)
        const data = await res.json()
        setitems(data)
      } catch (error) {
        console.log("Error" , error)
        setitems([])
      }
      setLoading(false)
    }
  
    fetchProductsData()}
  ,[])

  return (
   <div>
     <div className="flex max-w-6xl p-2 mx-auto gap-x-5 gap-y-10 min-h-[80vh] mb-10">
      {
        loading ? (<Spinner/>) : 
        items.length > 0 ?(<div className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">{(items.map((item)=>(<Product key={item.id} item={item}/>))) }</div>) : <div className="m-auto flex justify-center items-center mx-auto text-4xl font-semibold text-gray-500"> No items Available</div>
      }
    </div>
   </div>
  );
};

export default Home;
