"use client";
import { OffCanvas } from "@/components";
import Image from "next/image";
import { useState } from "react";
import Filters from "./Filters";

const FiltersBar = () => {
  const [isOpenFilter, setOpenFilter] = useState<boolean>(false);
  const handleOpenFilter = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setOpenFilter(true);
  };
  return (
    <div className="shop-content-sorting">
      <div className="flex gap-6">
        <span
          className="flex items-center gap-1 cursor-pointer lg:hidden"
          onClick={handleOpenFilter}
        >
          <Image
            src="/icons/filters.svg"
            width={20}
            height={20}
            alt="filters"
          />
          Filters
        </span>
        <span>Showing 9 of 18 products</span>
      </div>
      <select name="sort" id="sort">
        <option value="default">Default sorting</option>
        <option value="low-price">Low in price</option>
        <option value="heigh-price">high in price</option>
        <option value="old">Oldest Products</option>
        <option value="common">Common Products</option>
      </select>
      {isOpenFilter && (
        <OffCanvas
          title="Filters"
          isOpen={isOpenFilter}
          setOpen={setOpenFilter}
          direction="ltr"
        >
          <Filters />
        </OffCanvas>
      )}
    </div>
  );
};

export default FiltersBar;
