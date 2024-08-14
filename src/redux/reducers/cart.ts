import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardapioType } from "../../pages/Home";

type cartState = {
  items: CardapioType[];
  visibleCart: boolean;
};

const initialState: cartState = {
  items: [],
  visibleCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CardapioType>) => {
      state.items.push(action.payload);
    },
    closeCart: (state) => {
      state.visibleCart = false;
    },
    openCart: (state) => {
      state.visibleCart = true;
    },

    deleteItem: (state, action: PayloadAction<CardapioType>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, closeCart, openCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
