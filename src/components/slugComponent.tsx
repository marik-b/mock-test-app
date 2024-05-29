"use client";
import Image from 'next/image'
import React,{useState} from 'react'

const SlugComponent = () => {
    // useStateSnippet 
    const [path, setPath] = useState("")
  return (
    <div>
        <Image alt='ecommerece' src={path ? path:'/pictures/bestSelling3.jpg'} width={400} height={400}></Image>
        <div className='flex items-center justify-evenly mx-auto mt-2'>
            <div  className='cursor-pointer w-16 h-16'>
                <Image src={'/pictures/bestSelling13.jpg'} width={60} height={60} alt="abc" onClick={()=>setPath("/pictures/bestSelling13.jpg")}></Image>
            </div>
            <div className='cursor-pointer w-16 h-16'>
                <Image src={'/pictures/bestSelling12.jpg'} width={60} height={60} alt="abc" onClick={()=>setPath("/pictures/bestSelling12.jpg")}></Image>
            </div>
            <div className='cursor-pointer w-16 h-16'>
                <Image src={'/pictures/bestSelling11.jpg'} width={60} height={60} alt="abc" onClick={()=>setPath("/pictures/bestSelling11.jpg")}></Image>
            </div>
        </div>
    </div>
  )
}

export default SlugComponent