import { Breadcrumbs, SocialMedia } from "@/components";
import Image from "next/image";
import "./BlogDetails.scss";
import BlogCard from "@/components/home/blog/BlogCard";
const BlogDetails = () => {
  return (
    <section className="blogDetails">
      <Breadcrumbs
        links={[
          { name: "home", url: "/" },
          { name: "blog", url: "/blog" },
          { name: "blog name", url: "/blog" },
        ]}
        className="bg-gray-100 rounded p-2 py-6 [&>ul]:container"
      />
      <div className="container">
        <div className="blogDetails-head">
          <h3 className="text-xl">Fashion</h3>
          <h1 className="text-xl md:text-3xl font-bold">
            5 Tips to Increase Your Online Sales
          </h1>
          <p>Posted by: kyrillos Ezzat on March 30, 2022</p>
        </div>
        <div className="blogDetails-content">
          <div className="relative h-[400px]">
            <Image
              src="/images/single-blog.png"
              alt="post name"
              fill
              className="object-cover object-top"
            />
          </div>
          <p className="blogDetails-desc">
            Tree doesn’t good void, waters without created Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nunc pretium nisi sed ante
            convallis scelerisque. Donec aliquet massa vel mollis sagittis.
            Fusce eu lectus ac magna vehicula malesuada. Aenean accumsan maximus
            feugiat. Phasellus laoreet, ipsum eget egestas euismod, quam nulla
            pretium turpis, quis posuere tortor mi eget orci. quam nulla pretium
            turpis, quis posuere tortor mi eget orci. Aliquam cursus enim urna,
            ut congue leo tristique id. Quisque quis diam at ipsum facilisis
            mollis. Nulla bibendum ornare libero, sed eleifend urna tincidunt
            sed. Vestibulum sit amet malesuada neque, vitae tincidunt enim.
            Etiam ut vestibulum felis. Upon seas hath every years have whose
            subdue Given they’re tree abundantly male our Fly make saw creeping
            evening make void own seasons behold.
          </p>
          <div className="blogDetails-bottom">
            <div className="blogDetails-bottom-tags">
              <span>Tags</span>
              <h2>Collection</h2>
              <h2>Makeup</h2>
              <h2>Fashion</h2>
            </div>
            <div className="blogDetails-bottom-share">
              <span>Share</span>
              <SocialMedia title="page title here" />
            </div>
          </div>
          <div className="blogDetails-related">
            <h1 className="blogDetails-related-title">Related Posts</h1>
            <div className="blogDetails-related-posts">
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
                link="/3"
                category="fashion"
                date="Dec 1,2023"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
