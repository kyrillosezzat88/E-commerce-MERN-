import { useState } from "react";
import { CreateProductModal, ProductsTable } from "../../components";
import { PlusIcon } from "../../assets/icons";

const Products = () => {
  const [isOpen, setCreateModal] = useState<boolean>(false);

  return (
    <section className="products">
      {isOpen && <CreateProductModal setOpenModal={setCreateModal} />}
      <div className="categories-head flex items-center justify-between">
        <h1 className="text-base font-bold">Products</h1>
        <button
          className="btn btn-primary"
          onClick={() => setCreateModal(true)}
        >
          <PlusIcon />
          New Product
        </button>
      </div>
      <ProductsTable />
    </section>
  );
};

export default Products;
