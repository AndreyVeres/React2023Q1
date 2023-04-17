import { bindActionCreators } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { allActions, IAppDispatch, IRootState } from 'store';

export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export const useActions = () => {
  const dispatch = useDispatch<IAppDispatch>();
  return bindActionCreators(allActions, dispatch);
};

export const useAppStore = () => {
  const filters = useAppSelector((state) => state.filterReducer);
  const userCards = useAppSelector((state) => state.userCardReducer);
  return {
    ...filters,
    ...userCards,
  };
};
