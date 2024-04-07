/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./tables.scss";
import Pagination from "./Pagination";
const CategoriesTable = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [data, setData] = useState({
    tableName: "Customers Order",
    tableHead: ["category name", "added date", "action", "status"],
    tableBody: [
      {
        id: "21e21e",
        name: "kyrillos",
        orderDate: new Date(),
        status: "active",
      },
      {
        id: "21e21wee",
        name: "kyrillos",
        orderDate: new Date(),
        status: "active",
      },
      {
        id: "21e222e",
        name: "kyrillos",
        orderDate: new Date(),
        status: "in-Active",
      },
      {
        id: "d32e3",
        name: "kyrillos",
        orderDate: new Date(),
        status: "active",
      },
    ],
  });

  const handelRowClicked = (rowId: string) => {
    setSelectedIds((prevSelectedRows: string[]) => {
      if (prevSelectedRows.includes(rowId)) {
        return prevSelectedRows.filter((id) => id !== rowId);
      } else {
        return [...prevSelectedRows, rowId];
      }
    });
  };

  return (
    <div className="generalTable">
      <div className="generalTable-head ">
        <h1 className="generalTable-head-title">{data.tableName}</h1>
        <div className="generalTable-head-actions">
          <input type="text" placeholder="Search" className="input" />
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>
              <input type="checkbox" />
            </th>
            {data.tableHead.map((th, index) => (
              <th key={index}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.tableBody.map((td, index) => (
            <tr key={index} onClick={() => handelRowClicked(td.id)}>
              <td>
                <input type="checkbox" checked={selectedIds.includes(td.id)} />
              </td>
              <td>{td.name}</td>
              <td>{td.orderDate.toDateString()}</td>
              <td>
                <select className="select" onClick={(e) => e.stopPropagation()}>
                  <option value="canceled">inActive</option>
                  <option value="complete">Active</option>
                </select>
              </td>
              <td>
                <span className={td.status}>{td.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default CategoriesTable;
