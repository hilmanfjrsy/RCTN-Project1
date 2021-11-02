import { configureStore } from '@reduxjs/toolkit'
import savedReducer from './slice/savedSlice'

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('saved');
    return JSON.parse(serializedState);
  } catch (e) {
    throw new Error(e)
  }
};

const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state.saved.value);
    localStorage.setItem('saved', serializedState);
  } catch (e) {
    throw new Error(e)
  }
};

const state= loadFromLocalStorage();

const store = configureStore({
  reducer: {
    saved: savedReducer
  },
  state
})

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store