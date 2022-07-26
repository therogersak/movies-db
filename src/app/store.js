import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import searchReducer from "../features/searchSlice";
import { moviesApi } from "../features/Api";
import idReducer from "../features/idSlice";
import titleReducer from "../features/titleSlice";
import typeReducer from "../features/typeSlice";


const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    search: searchReducer,
    id: idReducer,
    title: titleReducer,
    type: typeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);
export default store;
