import {
  Breadcrumbs,
  ProductActions,
  ProductRating,
  ProductSlider,
  Quantity,
} from "@/components";
import "./ProductDetails.scss";
import Image from "next/image";
type propsTypes = {
  params: {
    id: string;
  };
};

const page = ({ params: { id } }: propsTypes) => {
  const product = {
    id: "1",
    name: "Lace Shirt Cut II",
    price: 200,
    sale_price:100,
    currency: "$",
    image: "/images/product1.png",
    hoverImage: "/images/product1-hover.png",
    bestSeller: false,
    newReleased: true,
    sales: true,
    views:26,
    description:" The shorts are made from soft organic cotton. They have an elasticated waistband with an internal drawstring and side pockets."
  };
  return (
    <section className="productDetails">
      <Breadcrumbs
        links={[
          { name: "home", url: "/" },
          { name: "shop", url: "/shop" },
          { name: "product", url: "" },
        ]}
        className="bg-gray-100 rounded p-2 py-6 [&>ul]:container"
      />
      <div className="container">
        <div className="productDetails-content">
          <div className="productDetails-content-gallery">
            <ProductSlider />
          </div>
          <div className="productDetails-content-details">
            <h1 className=" text-base flex gap-2">
              <span className="text-red-500 font-JostBold flex gap-2 items-center">
                <Image
                  src="/icons/eye.svg"
                  alt="guests"
                  width={24}
                  height={24}
                />
                {product.views} guests
              </span>
              are viewing this product
            </h1>
            <h1 className="productDetails-content-details-title">
              {product.name}
            </h1>
            <ProductRating />
            <div className="productDetails-content-details-price">
              <span>{product.sale_price} {product.currency}</span>
              <span className="productDetails-content-details-disPrice">
              {product.price} {product.currency}
              </span>
            </div>
            <div className="productDetails-content-details-desc ">
             {product.description}
            </div>
            <ProductActions max_quantity={10} product={product} />
            <div className="productDetails-content-details-adv"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
