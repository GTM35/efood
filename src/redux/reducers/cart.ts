import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardapioType } from "../../pages/Home";

type cartState = {
  items: CardapioType[];
  visibleCart: boolean;
  visibleDelivery: boolean;
  visibleConfirmation: boolean;
  visiblePayment: boolean;
};

const initialState: cartState = {
  items: [],
  visibleCart: false,
  visibleDelivery: false,
  visibleConfirmation: false,
  visiblePayment: false,
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
      state.visibleConfirmation = false;
      state.visibleDelivery = false;
      state.visiblePayment = false;
    },
    openCart: (state) => {
      state.visibleCart = true;
      state.visibleDelivery = false;
      state.visibleConfirmation = false;
      state.visiblePayment = false;
    },

    deleteItem: (state, action: PayloadAction<CardapioType>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    openDelivery: (state) => {
      state.visibleConfirmation = false;
      state.visiblePayment = false;
      state.visibleDelivery = true;
    },
    openConfirmation: (state) => {
      state.visibleDelivery = false;
      state.visibleCart = false;
      state.visibleConfirmation = true;
      state.visiblePayment = false;
    },

    openPayment: (state) => {
      state.visibleDelivery = false;
      state.visibleCart = false;
      state.visibleConfirmation = false;
      state.visiblePayment = true;
    },

    Confirmation: (state) => {
      state.visibleDelivery = false;
      state.visibleCart = false;
      state.visibleConfirmation = false;
      state.visiblePayment = false;

      state.items = [];
    },
  },
});

export const {
  addItem,
  closeCart,
  openCart,
  deleteItem,
  openConfirmation,
  openDelivery,
  openPayment,
  Confirmation,
} = cartSlice.actions;
export default cartSlice.reducer;
