import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userCardReducer, { userCardActions } from './userCardReducer/userCardReducer';
import filterReducer, { filterActions } from './filterReducer/filterReducer';
import { mtgService } from 'service/mtgService';

const rootReduer = combineReducers({
  filterReducer,
  userCardReducer,
  [mtgService.reducerPath]: mtgService.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReduer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mtgService.middleware),
  });
};

export const allActions = {
  ...filterActions,
  ...userCardActions,
};

export type IRootState = ReturnType<typeof rootReduer>;
export type IAppStore = ReturnType<typeof setupStore>;
export type IAppDispatch = IAppStore['dispatch'];
export const store = setupStore();
