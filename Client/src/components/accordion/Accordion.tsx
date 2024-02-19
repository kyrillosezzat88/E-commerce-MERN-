"use client";
import { useState } from "react";
import Image from "next/image";
import { accordionTypes } from "./Accordion.types";
import "./Accordion.scss";
const Accordion = ({ title, children }: accordionTypes) => {
  const [isOpen, setOpen] = useState<boolean>(true);
  return (
    <div className="accordion">
      <div className="accordion-title" onClick={() => setOpen((prev) => !prev)}>
        {title}
        <Image
          src="/icons/arrow-up.svg"
          width={24}
          height={24}
          alt={title}
          className={` transition-all duration-300 ${isOpen && " rotate-180"}`}
        />
      </div>
      <div className={`accordion-content ${isOpen && "activeAccordion"}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
