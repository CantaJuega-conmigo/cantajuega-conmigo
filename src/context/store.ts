import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./userSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      // Agrega aquí otros reducers si los tienes
    },
  });

export const wrapper = createWrapper(makeStore, { debug: true });
