import { useState } from "react";
import Pagination from "./Pagination";
import { handleRowClicked } from "../../utils/tableUtils";
import { DeleteIcon, EditIcon } from "../../assets/icons";

const ProductsTable = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [data, setData] = useState({
    tableName: "products",
    tableHead: [
      "product name",
      "category",
      "added date",
      "stock",
      "status",
      "actions",
    ],
    tableBody: [
      {
        id: "21e21e",
        name: "shoos",
        category: "shoos",
        addedDate: new Date(),
        stock: 100,
        status: "in-Active",
      },
      {
        id: "21e21wee",
        name: "shoos",
        category: "shoos",
        addedDate: new Date(),
        stock: 10,
        status: "active",
      },
      {
        id: "21e222e",
        name: "shoos",
        category: "shoos",
        addedDate: new Date(),
        stock: 200,
        status: "active",
      },
      {
        id: "d32e3",
        name: "shoos",
        category: "shoos",
        addedDate: new Date(),
        stock: 20,
        status: "active",
      },
    ],
  });
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
            <tr
              key={index}
              onClick={() => handleRowClicked(td.id, setSelectedIds)}
            >
              <td>
                <input type="checkbox" checked={selectedIds.includes(td.id)} />
              </td>
              <td>{td.name}</td>
              <td>{td.category}</td>
              <td>{td.addedDate.toDateString()}</td>
              <td>{td.stock}</td>
              <td>
                <span className={td.status}>{td.status}</span>
              </td>
              <td
                className="flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <select className="select">
                  <option value="canceled">inActive</option>
                  <option value="complete">Active</option>
                </select>
                <button>
                  <DeleteIcon />
                </button>
                <button>
                  <EditIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsTable;
