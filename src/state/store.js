// store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlices';

const store = configureStore({
    reducer: {
        search: searchReducer,
    },
});

export default store;
