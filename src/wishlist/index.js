import React, { useEffect, useState } from "react";
import Header from "../common/header";
import { useAddToCart } from "../common/addcart";
import { useDispatch, useSelector } from "react-redux";
import HalfRating from "../ui/rating";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Link } from "react-router-dom";
export default function Wishlist() {
    const storedata = useSelector(data => data.wishlist);
    const [addedcart, setAddedcart] = useState(false)
    const [addtocart] = useAddToCart();
    const handleCart = (id, item) => {
 
    }

    return (
        <div className="wishComponent  ">
            { console.log("Start")}
            <div className="px-5 py-3">
                <Header />
            </div>
            <div className="bg-zinc-100 py-3  px-3	 w-full">
                <div className="h-screen py-3  px-3  flex w-full">
                    <div class="w-8/12 mr-5 rounded-lg bg-white shadow-lg shadow-indigo-500/40">
                        <div className="pt-6 px-5">
                            <p className="text-4xl font-semibold">Shopping Wishlist</p>
                            <div className="flex justify-between border-bottom py-3">
                                <a className=" text-[#007185]">Select All Items</a>

                            </div>
                        </div>
                        <div className="cart-items py-5 px-5">
                            {storedata && storedata.map(item => {

                                return <div className="flex items-start justify-between border-bottom py-3 " key={item.id}>
                                    <div className="d-flex">
                                        <img className="mx-5 cart-img" src={item.image} />
                                    </div>
                                    <div className="w-1/3 flex-row items-center">
                                        <span className=" mb-3" >{item.title}</span>
                                        <span className=" text-slate-700 ml-auto" > {item.price}</span>
                                        <HalfRating rate={item.rating.rate} count={item.rating.count} />
                                    </div>
                                    <div className=" mr-5 flex flex-col content-start">

                                        {console.log("cart1")}
                                        {!addedcart ? <button class="justify-center items-center bg-transparent w-full mt-3 flex text-lg   text-black-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded" style={{ background: " #FFD814" }}
                                            onClick={() =>{
                                                console.log("clicked")
                                                setAddedcart(true)
                                            }}
                                        >  <i class="fa fa-shopping-cart text-2xl   mr-2"></i> <span>Add to Cart</span>    </button>
                                            :
                                            <div className="flex flex-col">
                                                <span> <TaskAltIcon className="bg-green-600  rounded-full text-white mr-1" /><span className="text-green-600 text-lg">Added to Cart</span></span>
                                                <Link to='/cart'><button className="font-semibold mt-3 bg:transparent border-solid border-2 border-zinc-300 hover:bg-slate-100 rounded-lg py-1 px-4 text-lg ">View Cart</button></Link>
                                            </div>}
                                     
                                    </div>
                                </div>
                                      
                            })}
                        </div>
                    </div>

                </div>
            </div>
            { console.log("Stop")}
        </div >

    )
}