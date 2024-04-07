/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { EmptyOrders, OrdersIcon, PlusIcon } from "../../assets/icons";
import { OrderModal, OrderTable, StatisticCard } from "../../components";

const Orders = () => {
  const [data, setdata] = useState(1);
  const [isOpen, setOrderModal] = useState<boolean>(false);
  return (
    <section className="orders">
      <div className="orders-head flex items-center justify-between">
        <h1>Order Summary</h1>
        <button className="btn btn-primary" onClick={() => setOrderModal(true)}>
          <PlusIcon />
          Create a new order
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <StatisticCard
          icon={<OrdersIcon />}
          name="title"
          filterList={[{ name: "test", value: "test" }]}
          summary={[
            { name: "all orders", value: 200 },
            { name: "Pending", value: 20 },
            { name: "completed", value: 80 },
          ]}
        />
        <StatisticCard
          icon={<OrdersIcon />}
          name="title"
          filterList={[{ name: "test", value: "test" }]}
          summary={[{ name: "sales", value: 200 }]}
        />
        <StatisticCard
          icon={<OrdersIcon />}
          name="title"
          filterList={[{ name: "test", value: "test" }]}
          summary={[{ name: "sales", value: 200 }]}
        />
      </div>
      {data ? (
        <OrderTable />
      ) : (
        <div className="flex justify-center gap-4 min-h-[600px] flex-col items-center bg-white mt-5 p-5 rounded-md">
          <EmptyOrders />
          <h2 className="font-bold capitalize">No Orders Yet?</h2>
          <p className="text-black/60 max-w-64 text-center">
            Add products to your store and start selling to see orders here.
          </p>
          <button className="btn btn-primary">
            <PlusIcon /> New Order
          </button>
        </div>
      )}
    </section>
  );
};

export default Orders;
