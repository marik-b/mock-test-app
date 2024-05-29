

export type Product={
id:number;
title:string;
img:string ;
slug:string;
price:number;
category:string;
description:string;
size:string[];
color:string[];
qty:number;
discount?:number;
};

export type Cart={
    id:number;
    title:string;
    img:string ;
    slug:string;
    price:number;
    discount?:number;
    category:string;
    size:string;
    qty:number;
    };