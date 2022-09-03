import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting_reducer';

const rootReducer = combineReducers({
	greeting: greetingReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
