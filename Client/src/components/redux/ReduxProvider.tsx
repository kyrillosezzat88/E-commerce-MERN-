"use client";

import { store } from "@/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
const ReduxProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
