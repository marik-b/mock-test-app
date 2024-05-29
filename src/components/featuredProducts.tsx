"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCard from "./bestSellingCard";

const FeaturedProducts = () => {
  // data for randering
  const BestSell = [
    {
      id: 1,
      title: "Gray Top",
      img: "/pictures/bestSelling.jpg",
      slug: "gray-top",
      price: 1234,
      category: "top",
      description: "Gray Top",
      size: ["S", "MD", "L", "XL", "XXL"],
      color: ["#ffffff", "#000000", "#e60000"],
      qty: 1,
      discount: 0,
    },
    {
      id: 2,
      title: "Red High Neck",
      img: "/pictures/bestSelling2.jpg",
      slug: "red-high-neck",
      price: 1234,
      category: "top",
      description: "Red High Neck",
      size: ["S", "MD", "L", "XL", "XXL"],
      color: ["#ffffff", "#000000", "#e60000"],
      qty: 1,
      discount: 0,
    },
    {
      id: 3,
      title: "Blue Top with Pants",
      img: "/pictures/bestSelling3.jpg",
      slug: "blue-top-with-pants",
      price: 1234,
      category: "top",
      description: "Blue Top with Pants",
      size: ["S", "MD", "L", "XL", "XXL"],
      color: ["#ffffff", "#000000", "#e60000"],
      qty: 1,
      discount: 0,
    },
    {
      id: 4,
      title: "White Top",
      img: "/pictures/bestSelling4.jpg",
      slug: "white-top",
      price: 1234,
      category: "top",
      description: "white top",
      size: ["S", "MD", "L", "XL", "XXL"],
      color: ["#ffffff", "#000000", "#e60000"],
      qty: 1,
      discount: 0,
    },
    {
      id: 5,
      title: "Stripe White Top",
      img: "/pictures/bestSelling5.jpg",
      slug: "stripe-white-top",
      price: 1234,
      category: "top",
      description: "Stripe White Top",
      size: ["S", "MD", "L", "XL", "XXL"],
      color: ["#ffffff", "#000000", "#e60000"],
      qty: 1,
      discount: 0,
    },
    {
      id: 6,
      title: "Blue Overcoat",
      img: "/pictures/bestSelling6.jpg",
      slug: "blue-overcoat",
      price: 1234,
      category: "top",
      description: "Blue Overcoat",
      size: ["S", "MD", "L", "XL", "XXL"],
      color: ["#ffffff", "#000000", "#e60000"],
      qty: 1,
      discount: 0,
    },
    {
      id: 7,
      title: "Black Overcoat",
      img: "/pictures/bestSelling7.jpg",
      slug: "black-overcoat",
      price: 1234,
      category: "top",
      description: "Black Overcoat",
      size: ["S", "MD", "L", "XL", "XXL"],
      color: ["#ffffff", "#000000", "#e60000"],
      qty: 1,
      discount: 0,
    },
  ];
  // Carousel Setting
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="pb-[100px] mt-[100px]">
      {/* Heading  */}
      <div className="text-center mb-5 ">
        <h1 className="sm:text-3xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900 mb-4">
          Products
        </h1>
      </div>
      {/* Carousel  */}
      <Slider {...settings}>
        {BestSell.map((items, i) => (
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
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
