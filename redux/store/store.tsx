import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "../slice/todo";

export const store = configureStore({
  reducer: {
    Todo: TodoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
