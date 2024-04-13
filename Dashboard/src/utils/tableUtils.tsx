import { Dispatch, SetStateAction } from "react";

export const handleRowClicked = (
  rowId: string,
  setSelectedIds: Dispatch<SetStateAction<string[]>>
) => {
  setSelectedIds((prevSelectedRows: string[]) => {
    if (prevSelectedRows.includes(rowId)) {
      return prevSelectedRows.filter((id) => id !== rowId);
    } else {
      return [...prevSelectedRows, rowId];
    }
  });
};
