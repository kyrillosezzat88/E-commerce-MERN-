"use client";
import "./Quantity.scss";
import Image from "next/image";
import { useAppDispatch } from "@/store";
import { decrement, increment } from "@/store/slices/CartSlice";
import { toast } from "react-toastify";

type QTYTypes = {
  id: string;
  quantity: number | undefined;
};

const Quantity = ({ id, quantity }: QTYTypes) => {
  const dispatch = useAppDispatch();

  const handleIncrement = (quantity: number) => {
    dispatch(increment({ id, quantity }));
    toast('cart updated successfully' , {type: 'success'});
  };
  const handleDecrement = (quantity: number) => {
    dispatch(decrement({ id, quantity }));
    toast('cart updated successfully' , {type: 'success'});

  };
  return (
    <div className="quantity">
      <div className="flex justify-center items-center">
        <Image
          src="/icons/minus.svg"
          alt="minus"
          width={24}
          height={24}
          onClick={() => handleDecrement(1)}
          className=" cursor-pointer"
        />
      </div>
      <span className="border-r border-l border-gray-500">{quantity}</span>
      <div className="flex justify-center items-center">
        <Image
          src="/icons/plus.svg"
          alt="plus"
          width={24}
          height={24}
          onClick={() => handleIncrement(1)}
          className=" cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Quantity;
