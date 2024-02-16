import React, { useState } from "react";
import Header from "../common/header";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function Cart() {

    // const location = useLocation()
    // const fromDashboard = location.state.cartItems;
    const storecartdata = useSelector(data => data.cart);
    let totals = 0;
    let itemCount = 0;
    // *********Total********************************* 
    // <span className=" text-slate-700" >Total : {item.quantity * item.data.price}</span>
    return (
        <div className="cartComponent  ">
            <div className="px-5 py-3">
                <Header />
            </div>
            <div className="bg-zinc-100 py-3  px-3	h-screen w-full">
                <div className="h-screen py-3  px-3  flex w-full">
                    <div class="w-8/12 mr-5 rounded-lg bg-white shadow-lg shadow-indigo-500/40">
                        <div className="pt-6 px-5">
                            <p className="text-4xl font-semibold">Shopping Cart</p>
                            <div className="flex justify-between border-bottom py-3">
                                <a className=" text-[#007185]">Select All Items</a>
                                <span className=" font-semibold text-zinc-500">Price</span>
                            </div>
                        </div>
                        <div className="cart-items py-5 px-5">
                            {storecartdata.map(item => {

                                return <div className="flex items-start  border-bottom py-3" key={item.data.id}>
                                    <div className="w-1/3 flex items-center">
                                        <p className="mr-5">{item.data.id}</p>
                                        <input type="checkbox" />
                                        <img className="mx-5 cart-img" src={item.data.image} />
                                    </div>
                                    <div className=" mr-5 flex flex-col content-start">
                                        <span className=" mb-3" >{item.data.title}</span>

                                        <select className=" font-normal bg-[#F0F2F2] w-44 rounded-lg px-2 py-1 form-select" aria-label="Default select example">
                                            <option selected className="font-semibold ">Qty: {item.quantity}</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                    <span className=" text-slate-700 ml-auto" > {item.data.price}</span>
                                </div>
                            })}
                        </div>
                    </div>
                    <div class="w-4/12  rounded-lg bg-white shadow-lg shadow-indigo-500/40 p-5">
                        < p className="text-4xl ">
                            {storecartdata.map(item => {
                                itemCount += 1;
                                totals += item.quantity * item.data.price;
                            })
                            }
                            Subtotal ({itemCount} items):
                            <span className="font-semibold">  {totals} </span>
                        </p>
                        <button className="w-full py-2 mt-4 px-5 button-primary font-semibold rounded-xl">Proceed to buy</button>
                    </div>
                </div>
            </div>
        </div >

    )
}