"use client";
import { ProductCard } from "@/components";
import { products } from "@/components/home/productsTabs/data";

const MostViewedProducts = () => {
  return (
    <section className="mostViewed border-t border-gray-200 mt-12 pt-12">
      <h1 className="mb-8 text-3xl md:text-4xl text-center font-JostSemiBold capitalize">
        Most Viewed Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default MostViewedProducts;
