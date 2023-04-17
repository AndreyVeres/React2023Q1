import { IUserInfo } from 'pages/form/FormCard';
import filterReducer, { filterActions } from 'store/filterReducer/filterReducer';
import userCardReducer, { userCardActions } from 'store/userCardReducer/userCardReducer';

describe('userCardSlice', () => {
  const initialState = { userCards: [] };
  const card: IUserInfo = {
    name: '',
    surName: '',
    dob: '',
    country: '',
    file: '',
    gender: '',
  };

  it('should add a card to the userCards array', () => {
    const action = userCardActions.addCard(card);
    const newState = userCardReducer(initialState, action);
    expect(newState.userCards.length).toEqual(1);
    expect(newState.userCards[0]).toEqual(card);
  });
});

describe('filterSlice', () => {
  const initialState = {
    name: '',
    pageSize: 10,
  };

  it('should update the name query', () => {
    const action = filterActions.setQuery('test');
    const newState = filterReducer(initialState, action);
    expect(newState.name).toEqual('test');
  });

  it('should update the page size', () => {
    const action = filterActions.setPageSize(20);
    const newState = filterReducer(initialState, action);
    expect(newState.pageSize).toEqual(20);
  });
});
