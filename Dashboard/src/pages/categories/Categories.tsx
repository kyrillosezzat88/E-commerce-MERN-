import { useState } from "react";
import { PlusIcon } from "../../assets/icons";
import { CategoriesTable, CreateCategoryModal } from "../../components";

const Categories = () => {
  const [isOpen, setCreateModal] = useState<boolean>(false);

  return (
    <section className="categories">
      {isOpen && <CreateCategoryModal setOpenModal={setCreateModal} />}
      <div className="categories-head flex items-center justify-between">
        <h1 className="text-base font-bold">Categories</h1>
        <button
          className="btn btn-primary"
          onClick={() => setCreateModal(true)}
        >
          <PlusIcon />
          New Category
        </button>
      </div>
      <CategoriesTable />
    </section>
  );
};

export default Categories;
