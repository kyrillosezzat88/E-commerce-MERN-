import { ReactNode, Dispatch, SetStateAction } from "react";

export type modalTypes = {
  children: ReactNode;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  position?: string;
};
