import Link from "next/link";
import { BreadcrumbsTypes } from "./Breadcrumbs.types";
import Image from "next/image";

const Breadcrumbs = ({ links, className }: BreadcrumbsTypes) => {
  return (
    <div className={`breadcrumb ${className}`}>
      <ul className="flex gap-2">
        {links.map((link, index) => (
          <li key={index} className="flex gap-2">
            <Link href={link.url} className=" capitalize">
              {link.name}
            </Link>
            {index != links.length - 1 && (
              <Image
                src="/icons/arrow-next.svg"
                alt="next"
                width={16}
                height={16}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
