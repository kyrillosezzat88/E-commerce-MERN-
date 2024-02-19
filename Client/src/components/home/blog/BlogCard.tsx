import Image from "next/image";
import "./BlogCard.scss";
import { BlogTypes } from "./Blog.types";
import Link from "next/link";
const BlogCard = ({
  image,
  title,
  date,
  category,
  description,
  link,
}: BlogTypes) => {
  return (
    <Link href={`/blog${link}`} className="blogCard">
      <Image
        src={image}
        alt={title}
        width={366}
        height={100}
        layout="responsive"
        className="blogCard-image "
      />
      <div className="blogCard-title">
        <h4 className="text-lg uppercase">{category}</h4>
        <span className="text-gray-500">{date}</span>
      </div>
      <h1 className=" font-JostSemiBold text-2xl capitalize hover:text-shadow transition-all cursor-pointer">
        {title}
      </h1>
      <div className="blogCard-desc">{description}</div>
      <button className="btn-underline mt-3 hover:text-shadow transition-all duration-300">
        Read More
      </button>
    </Link>
  );
};

export default BlogCard;
