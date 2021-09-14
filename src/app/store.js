import heroReducer from 'features/Hero/heroSlice';

const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  hero: heroReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
