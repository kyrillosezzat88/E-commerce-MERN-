import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className="blog my-12">
      <div className="container">
        <div className="blog-content">
          <h1 className="text-2xl md:text-4xl text-center font-semibold mb-10">
            From the Blog
          </h1>
          <div className="blog-content-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <BlogCard
              image="/images/blog1.png"
              title="The Best Winter Trend for 2022/2023"
              description="At this point, your 2022 wardrobe is probably looking a lot like your
        closet At this point, your 2022 wardrobe is probably looking a lot like
        your closet"
              link="/1"
              category="fashion"
              date="Dec 1,2023"
            />
            <BlogCard
              image="/images/blog1.png"
              title="The Best Winter Trend for 2022/2023"
              description="At this point, your 2022 wardrobe is probably looking a lot like your
        closet At this point, your 2022 wardrobe is probably looking a lot like
        your closet"
              link="/1"
              category="fashion"
              date="Dec 1,2023"
            />
            <BlogCard
              image="/images/blog1.png"
              title="The Best Winter Trend for 2022/2023"
              description="At this point, your 2022 wardrobe is probably looking a lot like your
        closet At this point, your 2022 wardrobe is probably looking a lot like
        your closet"
              link="/1"
              category="fashion"
              date="Dec 1,2023"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
