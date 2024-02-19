import { Breadcrumbs } from "@/components";
import BlogTabs from "@/components/blog/blogTabs/BlogTabs";
import BlogCard from "@/components/home/blog/BlogCard";
import { Metadata } from "next";
import Image from "next/image";
import "./Blog.scss";
export const metadata: Metadata = {
  title: "E-commerce Blogs",
  description: "Blogs",
};
const Blog = () => {
  return (
    <section className="blog">
      <Breadcrumbs
        links={[
          { name: "home", url: "/" },
          { name: "blog", url: "/blog" },
        ]}
        className="bg-gray-100 rounded p-2 py-6 [&>ul]:container"
      />
      <div className="container">
        <BlogTabs />
        <div className="blog-content">
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
      <div className="flex justify-center">
        <button className="btn btn-primary flex items-center gap-1">
          <Image
            src="/icons/repeat.svg"
            width={24}
            height={24}
            alt="load more"
          />
          Load More
        </button>
      </div>
    </section>
  );
};

export default Blog;
