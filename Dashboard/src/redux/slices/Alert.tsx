import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertState {
  message: string | null;
  type: "success" | "danger" | "warning" | "info";
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action?: (...args: any) => void;
}

const initialState: AlertState = {
  message: null,
  type: "success",
  isOpen: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<Partial<AlertState>>) => {
      Object.assign(state, action.payload, { isOpen: true });
    },
    hideAlert: (state) => {
      state.isOpen = false;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
