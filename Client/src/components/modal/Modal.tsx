"use client";
import { FC, useEffect } from "react";
import "./Modal.scss";
import { modalTypes } from "./Modal.types";

const Modal: FC<modalTypes> = ({ children, isOpen, setOpen, position }) => {
  const handleClose = () => setOpen(false);
  useEffect(() => {
    window.addEventListener("click", handleClose, { passive: true });
    return () => window.removeEventListener("click", handleClose);
  });
  if (isOpen) {
    return (
      <div className="modal">
        <div
          className={`modal-content ${
            position === "top"
              ? "top-[15%!important] -translate-y-0"
              : "-translate-y-[50%]"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content-body">{children}</div>
        </div>
      </div>
    );
  }
};

export default Modal;
