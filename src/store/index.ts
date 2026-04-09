import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./slices/portfolioSlice";
import collaborationsReducer from "./slices/collaborationsSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    collaborations: collaborationsReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["ui/setScrollY"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
