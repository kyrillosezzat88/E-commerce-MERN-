"use client";
import Image from "next/image";
import "./OffCanvas.scss";
import { FC, useEffect, useState } from "react";
import { OffCanvasTypes } from "./OffCanvas.types";

const OffCanvas: FC<OffCanvasTypes> = ({
  children,
  isOpen,
  setOpen,
  title,
  direction,
}) => {
  const [close, setClose] = useState<boolean>(isOpen);
  // handle close offcanvas
  const handleClose = () => {
    setClose(false);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };
  useEffect(() => {
    window.addEventListener("click", handleClose, { passive: true });
    return () => window.removeEventListener("click", handleClose);
  });

  return (
    <div className={`offCanvas ${isOpen && close && "offCanvas-open"}`}>
      <div
        className={`offCanvas-content${direction ? `-${direction}` : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="offCanvas-content-title ">
          <h1 className="text-3xl capitalize">{title}</h1>
          <Image
            src="/icons/close.svg"
            className=" cursor-pointer"
            alt="close"
            width={32}
            height={32}
            onClick={handleClose}
          />
        </div>
        <div className="offCanvas-content-body">{children}</div>
      </div>
    </div>
  );
};

export default OffCanvas;
