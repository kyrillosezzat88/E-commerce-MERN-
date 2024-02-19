import { ReactNode } from "react";

export interface Filter {
  name: string;
  value: string;
}

export interface Summary {
  name: string;
  value: number;
}

export interface StatisticCardTypes {
  name: string;
  icon: ReactNode;
  filterList: Filter[];
  summary: Summary[];
}
