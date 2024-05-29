"use client";
import React from 'react'
import BestSellingCard from '@/components/bestSellingCard'
import { useAppSelector } from '../store/hooks'
import { Product } from '../utils/types';
const Category = ({params}:{params:{category:string}}) => {
    const product = useAppSelector((state)=>state.products);
    const BestSell=product.filter((val)=>val.category==params.category);
     console.log(BestSell);
    // const BestSell = [
    //     {
    //         src: "/pictures/bestSelling.jpg",
    //         alt: "Best Selling Shirt",
    //         title: "Decent Red Top ",
    //         description: "Elegant top for Girls",
    //         price: 20987,
    //         category:"tops",
    //         slug:"eleganttops"
    //     },
    //     {
    //         src: "/pictures/bestSelling4.jpg",
    //         alt: "Best Selling Shirt",
    //         title: "Decent Blue Top ",
    //         description: "Elegant top for Girls",
    //         price: 20987,
    //         category:"tops",
    //         slug:"elegantredtops"
    //     },
    //     {
    //         src: "/pictures/bestSelling3.jpg",
    //         alt: "Best Selling Shirt",
    //         title: "Decent Yellow Top ",
    //         description: "Elegant top for Girls",
    //         price: 20987,
    //         category:"tops",
    //         slug:"elegantbluetops"
    //     },
    //     {
    //         src: "/pictures/bestSelling6.jpg",
    //         alt: "Best Selling Shirt",
    //         title: "Decent Green Top ",
    //         description: "Elegant top for Girls",
    //         price: 20987,
    //         category:"tops",
    //         slug:"elegantgreentops"
    //     },
    //     {
    //         src: "/pictures/bestSelling7.jpg",
    //         alt: "Best Selling Shirt",
    //         title: "Decent Pink Top ",
    //         description: "Elegant top for Girls",
    //         price: 20987,
    //         category:"tops",
    //         slug:"elegantyellowtops"
    //     },
    //     {
    //         src: "/pictures/bestSelling14.jpg",
    //         alt: "Best Selling Shirt",
    //         title: "Decent Gray Top ",
    //         description: "Elegant top for Girls",
    //         price: 20987,
    //         category:"tops",
    //         slug:"elegantpinktops"
    //     },
    //     {
    //         src: "/pictures/bestSelling2.jpg",
    //         alt: "Best Selling Shirt",
    //         title: "Decent SkyBlue Top ",
    //         description: "Elegant top for Girls",
    //         price: 20987,
    //         category:"tops",
    //         slug:"elegantskybluetops"
    //     },
    //     {
    //         src: "/pictures/bestSelling9.jpg",
    //         alt: "Best Selling Shirt",
    //         title: "Decent NavyBlue Top ",
    //         description: "Elegant top for Girls",
    //         price: 20987,
    //         category:"tops",
    //         slug:"elegantnavybluetops"
    //     },
    //     {
    //         src: "/pictures/bestSelling10.jpg",
    //         alt: "Best Selling Shirt",
    //         title: "Decent Dark Blue Top ",
    //         description: "Elegant top for Girls",
    //         price: 20987,
    //         category:"tops",
    //         slug:"elegantDarkbluetops"
    //     },
    //     {
    //         src: "/pictures/bestSelling11.jpg",
    //         alt: "Best Selling Shirt",
    //         title: "Decent Black Top ",
    //         description: "Elegant top for Girls",
    //         price: 20987,
    //         category:"tops",
    //         slug:"elegantblacktops"
    //     },
    //     {
    //         src: "/pictures/bestSelling12.jpg",
    //         alt: "Best Selling Shirt",
    //         title: "Decent Gray Top ",
    //         description: "Elegant top for Girls",
    //         price: 20987,
    //         category:"tops",
    //         slug:"elegantgraytops"
    //     },
    //     {
    //         src: "/pictures/bestSelling13.jpg",
    //         alt: "Best Selling Shirt",
    //         title: "Decent NudePink Top ",
    //         description: "Elegant top for Girls",
    //         price: 20987,
    //         category:"tops",
    //         slug:"elegantnudetops"
    //     }
    // ]
  return (
    <div className='mt-[50px] mb-[100px]'>
          {/* Heading  */}
          <div className="text-center mb-5 ">
                <h1 className="sm:text-3xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900 mb-4 capitalize">
                    {params.category}
                </h1>
            </div>
           {/* Best Selling Products  */}
           <div className='flex flex-wrap justify-center gap-5'>
                {
            BestSell.map((items:Product,i)=>(
                           <BestSellingCard 
                           key={i} 
                           src={items.img}
                           alt={items.title}
                           title={items.title}
                           description={items.description}
                           price={items.price}
                           category={items.category}
                           slug={items.slug}
                           />
                 ))
            }
            </div>
    </div>
  )
}

export default Category