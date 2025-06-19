import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;



            state.items.push({
                item
            })
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;