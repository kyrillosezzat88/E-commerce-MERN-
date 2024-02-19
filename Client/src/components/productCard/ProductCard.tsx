import Image from "next/image";
import "./productCard.scss";
import { productCardTypes } from "./productCard.types";
import { addProduct } from "@/store/slices/CartSlice";
import { useAppDispatch } from "@/store";
import Link from "next/link";
const ProductCard = ({ product }: productCardTypes) => {
  const dispatch = useAppDispatch();
  const handleAddProduct = () => {
    dispatch(addProduct({ ...product, quantity: 1 }));
  };
  return (
    <div className="productCard">
      <div className="productCard-content ">
        <div className="productCard-content-head relative">
          <Link href={`/product/${product.id}`}>
            <Image
              src={product.image}
              alt="productName"
              fill
              loading="lazy"
              sizes="100"
              className="productCard-content-head-image"
            />
            <Image
              src={product.hoverImage}
              alt="productName"
              fill
              sizes="100"
              loading="lazy"
              className="productCard-content-head-image"
            />
          </Link>
          <div className="productCard-content-head-action">
            <span className="productCard-content-head-action-icon">
              <Image src="/icons/heart.svg" width={24} height={24} alt="like" />
            </span>
            <span className="productCard-content-head-action-icon">
              <Image
                src="/icons/search.svg"
                width={24}
                height={24}
                alt="search"
              />
            </span>
          </div>
          <button
            className="productCard-content-head-action-addToCart btn-primary-hover"
            onClick={handleAddProduct}
          >
            Add To Cart
          </button>
        </div>
        <div className="productCard-content-body mt-4">
          <h1 className="text-lg capitalize font-JostSemiBold">
            {product.name}
          </h1>
          <p className="text-md capitalize text-gray-500">
            {product.currency}
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
