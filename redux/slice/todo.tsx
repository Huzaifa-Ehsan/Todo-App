import { createSlice } from "@reduxjs/toolkit";

type Props = {
  title: string;
  description: string;
  date: string;
  id: string;
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
    deleteTodo: (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const { addTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
