import Image from "next/image";
import { categories } from "./data";
import "./Categories.scss";
const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="categories-head">
          <h1 className="categories-head-title">Featured Categories</h1>
          <p className="underline">See All Categories</p>
        </div>
        <div className="categories-content">
          {categories.map((cat, index) => (
            <div key={index} className="categories-content-card">
              <div className="py-8">
                <h1 className="categories-content-card-title">{cat.name}</h1>
                <p>{cat.items} items</p>
              </div>
              <Image
                src={cat.image}
                alt="category"
                width={200}
                height={200}
                style={{
                  maxWidth: "calc(100% - 200px)",
                }}
                className="categories-content-card-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
