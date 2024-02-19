import { Breadcrumbs, CartItems, OrderSummary } from "@/components";
import { useAppSelector } from "@/store";

const page = () => {
  return (
    <section className="cart mt-[100px]">
      <Breadcrumbs
        links={[
          { name: "home", url: "/" },
          { name: "cart", url: "/cart" },
        ]}
        className="bg-gray-100 rounded p-2 py-6 [&>ul]:container"
      />
      <div className="container">
        <CartItems />
      </div>
    </section>
  );
};

export default page;
