"use client"
import { ProductType } from "@/interfaces"
import { FC } from "react";

const Product:FC<{product: ProductType}> = ({product}) => {
    console.log(product);
    
  return (
    <div>
    <div className="relative   "></div>
    </div>
  )
}

export default Product
