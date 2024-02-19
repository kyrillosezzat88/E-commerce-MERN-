"use client";
import Image from "next/image";
import { productTypes } from "./ProductCart.types";
import { useAppDispatch } from "@/store";
import { removeProduct } from "@/store/slices/CartSlice";
import { toast } from "react-toastify";
import { Quantity } from "@/components";

const ProductCart = ({
  product: { id, image, name, price, quantity, currency, color, size },
}: productTypes) => {
  const dispatch = useAppDispatch();
  const handleRemove = () => {
    dispatch(removeProduct(id));
    toast(`${name} removed succssfully`, { type: "success" });
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 mb-4">
      <Image
        src={image}
        alt={name}
        width={120}
        height={120}
        className="w-28 h-28 object-contain"
      />
      <div className=" col-span-2 flex flex-col">
        <h1 className="text-lg capitalize font-JostSemiBold">{name}</h1>
        <div className="flex justify-between items-center">
          {color && <span>Color: {color}</span>}
          {size && <span>Size: {size}</span>}
        </div>
        <Quantity id={id} quantity={quantity} />
      </div>
      <div className="flex flex-col justify-between items-end">
        <Image
          src="/icons/close.svg"
          alt="delete"
          width={16}
          height={16}
          onClick={handleRemove}
        />
        <span>
          {currency}
          {price * (quantity || 1)}
        </span>
      </div>
    </div>
  );
};

export default ProductCart;
