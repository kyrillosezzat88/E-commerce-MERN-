/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { EmptyOrders, PlusIcon } from "../../../assets/icons";
import OrderItemImg from "../../../assets/img/orderImg.png";

import OrderCard from "./OrderCard";
const RecentOrders = () => {
  const [recentOrders, setRecentOrders] = useState<any>([
    { name: "test", img: "text", price: 122 },
  ]);
  return (
    <div className="RecentOrders row-span-2 bg-white rounded-md p-5">
      <h2 className="font-bold text-black/70 mb-3">Recent Orders </h2>
      {recentOrders.length ? (
        <>
          <OrderCard
            name="iphone 14 pro max"
            img={OrderItemImg}
            price={1200}
            quantity={2}
            date="12 Sep 2022"
            status="pending"
          />
          <OrderCard
            name="iphone 12 pro max"
            img={OrderItemImg}
            price={1200}
            quantity={1}
            date="12 Oct 2022"
            status="complete"
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center gap-4 ">
          <EmptyOrders />
          <h2 className="text-2xl">No Orders Yey?!</h2>
          <p className="text-sm">
            Add products to your store and start selling to see orders here.
          </p>
          <button className="btn btn-primary">
            <PlusIcon />
            New Product
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentOrders;
