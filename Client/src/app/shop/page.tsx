import { Breadcrumbs } from "@/components";
import "./Shop.scss";
import Filters from "./Filters";
import Image from "next/image";
import MostViewedProducts from "./MostViewedProducts";
import Products from "./Products";
import FiltersBar from "./FiltersBar";
const page = () => {
  return (
    <section className="shop">
      <div className="shop-header">
        <div className="container">
          <h1 className="shop-header-title">Shop</h1>
          <Breadcrumbs
            links={[
              { name: "home", url: "/" },
              { name: "shop", url: "/shop" },
            ]}
          />
        </div>
      </div>
      <div className="shop-content py-12">
        <div className="container">
          <div className="flex flex-wrap md:flex-nowrap gap-10">
            <div className="w-full hidden lg:block md:w-1/4">
              <Filters />
            </div>
            <div className="w-full lg:w-3/4">
              <FiltersBar />
              <div className="selected-filters">
                <span className="capitalize">your filter</span>
                <div className="flex gap-4 border p-3 rounded">
                  XS
                  <Image
                    src="/icons/close.svg"
                    alt="clear"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="flex gap-4 border p-3 rounded">
                  women
                  <Image
                    src="/icons/close.svg"
                    alt="clear"
                    width={16}
                    height={16}
                  />
                </div>
                <span className="clearFilter">Clear All</span>
              </div>
              <div className="shop-products grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-12">
                <Products />
              </div>
              <div className="pagination">
                <Image
                  src="/icons/arrow-left.svg"
                  alt="prev"
                  width={24}
                  height={24}
                />
                <span className="pagination-page">1</span>
                <span className="pagination-page pagination-active">2</span>
                <span className="pagination-page">3</span>
                <span className="pagination-page">...</span>
                <span className="pagination-page ">10</span>
                <Image
                  src="/icons/arrow-right.svg"
                  alt="prev"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <MostViewedProducts />
        </div>
      </div>
    </section>
  );
};

export default page;
