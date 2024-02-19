import Image from "next/image";

const Search = () => {
  return (
    <div className="Search">
      <div className="flex items-center">
        <input type="text" placeholder="Search" className="input w-full" />
        <Image
          src="/icons/search.svg"
          width={24}
          height={24}
          alt="search"
          className=" cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] lg:max-h-[700px]">
        <div className="flex gap-4 border-b p-6">
          <Image
            src="/images/product1.png"
            width={100}
            height={100}
            alt="product"
          />
          <div>
            <h2>Product name</h2>
            <span>100$</span>
          </div>
        </div>
        <div className="flex gap-4 border-b p-6">
          <Image
            src="/images/product1.png"
            width={100}
            height={100}
            alt="product"
          />
          <div>
            <h2>Product name</h2>
            <span>100$</span>
          </div>
        </div>
        <div className="flex gap-4 border-b p-6">
          <Image
            src="/images/product1.png"
            width={100}
            height={100}
            alt="product"
          />
          <div>
            <h2>Product name</h2>
            <span>100$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
