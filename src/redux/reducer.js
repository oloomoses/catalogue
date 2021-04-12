import { GET_ITEMS, GET_ITEM } from './action';

const initialState = {
  companies: [],
  company: {},
  loading: false,
  alert: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return [...state.companies, action.payload];
    case GET_ITEM:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
