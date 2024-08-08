import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice.jsx";
// implementing redux-persist
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
const persistConfig = {
    key: "root",
    storage
};
const persistedReducer = persistReducer(persistConfig, noteReducer);
export const store = configureStore({
    reducer: {
        note: persistedReducer,
        middleware: [thunk]
    }
});

export const persistor = persistStore(store)