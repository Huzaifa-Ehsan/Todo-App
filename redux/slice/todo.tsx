import { createSlice } from "@reduxjs/toolkit";

type Props = {
  title: string;
  description: string;
  date: string;
  id: string;
};
const initialState: Props[] = [];

export const TodoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    data: initialState,
  },
  reducers: {
    addTodo: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, title, description, date } = action.payload;
      const existingTodo = state.data.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.description = description;
        existingTodo.date = date;
      }
    },
  },
});
export const { addTodo, deleteTodo, updateTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
