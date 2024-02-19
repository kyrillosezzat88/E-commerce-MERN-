"use client";
import { useState } from "react";
import { tabs } from "./tabs";
import { ProductCard } from "@/components";
import { products } from "./data";

const ProductsTabs = () => {
  const [activeTab, setActiveTab] = useState<
    "bestSeller" | "sales" | "newReleased"
  >("bestSeller");
  return (
    <section className="productsTabs py-12">
      <div className="container">
        <div className="productsTabs-tabs flex gap-6 justify-center text-3xl">
          {tabs.map((tab) => (
            <h2
              key={tab.id}
              className={`cursor-pointer transition-all duration-300 border-b-2 ${
                tab.value == activeTab
                  ? "text-shadow font-JostSemiBold opacity-100  border-shadow "
                  : "opacity-50"
              }`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.name}
            </h2>
          ))}
        </div>
        <div className="productsTabs-products grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
          {products.map(
            (product) =>
              product[activeTab] && (
                <ProductCard key={product.id} product={product} />
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsTabs;
