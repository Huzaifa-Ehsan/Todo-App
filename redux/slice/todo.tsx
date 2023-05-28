import { createSlice } from "@reduxjs/toolkit";

type Props = {
  title: string;
  description: string;
  date: string;
};

export const TodoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    data: [] as Props[],
  },
  reducers: {
    addTodo: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});
export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
