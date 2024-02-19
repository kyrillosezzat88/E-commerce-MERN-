"use client";

import { Accordion } from "@/components";
import Image from "next/image";

const Filters = () => {
  return (
    <>
      <h2 className="text-3xl mb-4 pb-4 border-b hidden lg:block">Filter</h2>
      <Accordion title="Categories">
        <div className="flex gap-3 mb-2 items-center">
          <div className="input-checkbox">
            <input id="men" type="checkbox" />
            <span className="input-checkbox-mark">
              <Image
                src="/icons/check.svg"
                width={24}
                height={24}
                alt="checked"
              />
            </span>
          </div>
          <label htmlFor="men">Men</label>
        </div>
      </Accordion>
      <Accordion title="Colors">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-6 rounded-full border border-black flex justify-center items-center">
            <span className="w-4 h-4 block rounded-full bg-blue-500"></span>
          </div>
          <label htmlFor="blue">Blue</label>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-5 h-5 rounded-full bg-red-500"></span>
          <label htmlFor="red">Red</label>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-5 h-5 rounded-full bg-black"></span>
          <label htmlFor="black">Black</label>
        </div>
      </Accordion>
      <Accordion title="Size">
        <div className="flex gap-3">
          <span className="py-2 px-3 border rounded border-black font-JostSemiBold cursor-pointer">
            XL
          </span>
          <span className="py-2 px-3 border rounded">M</span>
          <span className="py-2 px-3 border rounded">S</span>
          <span className="py-2 px-3 border rounded">XS</span>
        </div>
      </Accordion>
    </>
  );
};

export default Filters;
