import React from "react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { Button } from "./ui/button";
import Link from "next/link";

const BestSellingCard = ({
  src,
  alt,
  title,
  description,
  price,
  category,
  slug,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  slug: string;
}) => {
  return (
    <div className=" max-w-[380px] h-[35rem]  mx-auto shadow-md rounded-xl overflow-hidden relative group">
      <Link href={`/${category}/${slug}`}>
        {/* Image Section  */}
        <div className="block h-[20rem] relative overflow-hidden rounded">
          <Image
            src={src}
            alt="Best Selling Product "
            width={380}
            height={200}
          />
        </div>
        {/* Body Section  */}
        <div className="card-body">
          {title && (
            <h2 className="scroll-m-20 border-b text-lg text-myBlackHead line-clamp-1 font-semibold tracking-tight transition-colors first:mt-0">
              {title}
            </h2>
          )}
          {price && <p className="font-bold">{`$ ${price} `}</p>}
          {description && <p className="line-clamp-1">{description}</p>}
        </div>
        {/* Button Section  */}
        <div className="flex flex-row justify-between">
          <Button className=" ml-5 text-myWhite bg-myBlackHead rounded-xl group hover:rounded-3xl duration-300 hover:outline-myOrange hover:text-myBlackHead ">
            Buy Now!
          </Button>
          <Button className="ml-10 text-myWhite bg-myBlackHead rounded-xl group hover:rounded-3xl duration-300 hover:outline-myOrange hover:text-myBlackHead ">
            Add to Cart
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default BestSellingCard;
