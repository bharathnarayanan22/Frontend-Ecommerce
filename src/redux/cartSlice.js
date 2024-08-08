import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            console.log(action);
            state.items.push(action.payload);
        },
        setCart: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const { addItem, setCart } = cartSlice.actions;
export default cartSlice.reducer;