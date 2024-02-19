import { FC, ReactNode, SetStateAction, Dispatch } from "react";
export type OffCanvasTypes = {
  children: ReactNode;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  direction?: "ltr" | "rtl";
};
