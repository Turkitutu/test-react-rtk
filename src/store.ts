import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './modules/todo/store';
import { todoApi } from './modules/todo/store/service';


const store = configureStore({
    reducer: {
        todo: todoReducer,
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;