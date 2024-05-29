import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // these reducers functions never return anything.
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // const index = state.items.indexOf(action.payload);
      // if (index > -1) {
      //   // only splice array when item is found
      //   state.items.splice(index, 1); // 2nd parameter means remove one item only
      // }
      state.items = state.items.filter((item) => {
        item.id != action.payload.id;
      });
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

/*Behind the scenes
* cartSlice = {
    actions: {
        addItem,
        removeItem,
        clearCart
    },
    reducer: reducers
}
*/
