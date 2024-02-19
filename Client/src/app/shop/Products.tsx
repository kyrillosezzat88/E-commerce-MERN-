"use client";
import { ProductCard } from "@/components";
import { products } from "@/components/home/productsTabs/data";

const Products = () => {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default Products;
