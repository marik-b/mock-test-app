
import SlugComponent from '@/components/slugComponent'
import { Button } from '@/components/ui/button'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import {FaPlus,FaMinus} from 'react-icons/fa'
const Slug = () => {
  
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    {/* Image  */}
                    <SlugComponent/>
                    {/* <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src="https://dummyimage.com/400x400"
                    /> */}
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        {/* Category  */}
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                            Modern Clothes
                        </h2>
                        {/* Title  */}
                        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-900 title-font mb-1">
                            Elegant and Decent Top
                        </h1>

                        {/* Rating  */}
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" checked />
                        </div>
                        
                        {/* Description  */}
                        <p className="leading-relaxed scroll-m-20 text-base font-normal text-myBlackPara ">
                            Best Quality Tops for Girls. Used More than two years. Best Designer design this eloquent piece. Select my most of the famous celeberties. Suits you in better way. Designed to make you look beautiful and also comfortable. Spending your day with new and fresh look. Feel comfortable with our elegant piece.
                        </p>
                        {/* Color and Size  */}
                        <div className="flex mt-6 items-center  mb-5">
                            <div className="flex">
                                <span className="mr-3 scroll-m-20 text-base font-normal text-myBlackHead tracking-tight">Color</span>
                                <button className="border-2 border-gray-300 rounded-full bg-white w-6 h-6 focus:outline-none active:border-black hover:border-black" />
                                <button className="border-2 border-gray-300 rounded-full bg-red-600 w-6 h-6 focus:outline-none active:border-black hover:border-black" />
                                <button className="border-2 border-gray-300 rounded-full bg-blue-600 w-6 h-6 focus:outline-none active:border-black hover:border-black" />
                                <button className="border-2 border-gray-300 rounded-full bg-black w-6 h-6 focus:outline-none active:border-black hover:border-black" />
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3 scroll-m-20 text-base font-normal text-myBlackHead tracking-tight">Size</span>
                                <div className="relative">
                                    <div className="form-control w-full max-w-xs">
                                       <select className="select select-bordered">
                                            <option disabled selected>Select Size</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                            <option>XXL</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>

                         {/* Quantity  */}
                         <div className='flex items-center'>
                         <span className="mr-3 scroll-m-20 text-base font-normal text-myBlackHead tracking-tight">Quantity</span>
                         <Button className='w-fit   text-myWhite bg-myBlackHead rounded-xl group hover:rounded-3xl duration-300 hover:outline-myOrange hover:text-myBlackHead '>
                                <FaMinus className="mr-1 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce " /> Less
                            </Button>
                            <div className='mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight '>
                              1
                            </div>
                         <Button className=' w-fit  text-myWhite bg-myBlackHead rounded-xl group hover:rounded-3xl duration-300 hover:outline-myOrange hover:text-myBlackHead '>
                                <FaPlus className="mr-1 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce " /> More
                            </Button>
                             </div>

                             {/* divider  */}
                        <div className='divider'></div>
                       

                       
                        {/* Price  */}
                        <div className="flex gap-20">
                            <span className="mr-10 text-myBlackHead scroll-m-20 text-2xl font-semibold tracking-tight ">
                                $58.00
                            </span>
                            <Button className='ml-10 pr-10 pl-10 text-myWhite bg-myBlackHead rounded-xl group hover:rounded-3xl duration-300 hover:outline-myOrange hover:text-myBlackHead '>
                                <BsFillCartFill className="mr-1 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce " /> Add to Cart
                            </Button>
                        </div>
                        {/* Button Section  */}
                        <div className='flex flex-row gap-10 mt-6'>
                            <Button className=' pl-10 pr-10 w-full text-center ml-5 text-myWhite bg-myBlackHead rounded-xl group hover:rounded-3xl duration-300 hover:outline-myOrange hover:text-myBlackHead '>
                                <AiFillHeart className="mr-1 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce " /> Buy Now!
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Slug 