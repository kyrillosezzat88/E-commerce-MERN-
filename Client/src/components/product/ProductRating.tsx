import Image from "next/image";

const ProductRating = () => {
  return (
    <div className="productDetails-content-details-rate ">
      <Image src="/icons/star-solid.svg" alt="rate" width={24} height={24} />
      <Image src="/icons/star-solid.svg" alt="rate" width={24} height={24} />
      <Image src="/icons/star-solid.svg" alt="rate" width={24} height={24} />
      <Image src="/icons/star-solid.svg" alt="rate" width={24} height={24} />
      <Image src="/icons/star-outline.svg" alt="rate" width={24} height={24} />
      (4)
    </div>
  );
};

export default ProductRating;
