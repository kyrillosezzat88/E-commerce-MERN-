type tabsType = {
  id: number;
  name: String;
  value: "bestSeller" | "sales" | "newReleased";
}[];
export const tabs: tabsType = [
  {
    id: 1,
    name: "Best Seller",
    value: "bestSeller",
  },
  {
    id: 2,
    name: "New Products",
    value: "newReleased",
  },
  {
    id: 3,
    name: "Sales Products",
    value: "sales",
  },
];
