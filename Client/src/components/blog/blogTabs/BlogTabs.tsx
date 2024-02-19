"use client";
import { useState } from "react";
import { Tabs } from "./tabs";

const BlogTabs = () => {
  const [activeTab, setActiveTab] = useState<String>("all");
  return (
    <ul className="flex justify-center items-center gap-5 text-lg py-6">
      {Tabs.map((tab, index) => (
        <li
          key={index}
          onClick={() => setActiveTab(tab.value)}
          className={` cursor-pointer transition-all ${
            tab.value === activeTab
              ? "font-bold opacity-100 border-b border-black"
              : "opacity-80"
          }`}
        >
          {tab.name}
        </li>
      ))}
    </ul>
  );
};

export default BlogTabs;
