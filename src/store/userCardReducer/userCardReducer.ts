import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo } from 'pages/form/FormCard';

const initialState: { userCards: IUserInfo[] } = {
  userCards: [],
};

export const userCardSlie = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<IUserInfo>) {
      state.userCards.push(action.payload);
    },
  },
});

export const userCardActions = userCardSlie.actions;

export default userCardSlie.reducer;
