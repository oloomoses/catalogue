import {
  GET_COMPANIES,
  FILTER,
  SET_LOADING,
  GET_COMPANY,
} from '../type';

const initialState = {
  companies: [],
  company: {},
  loading: false,
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
        loading: false,
      };

    case FILTER:
      return {
        ...state,
        companies: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_COMPANY:
      return {
        ...state,
        company: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default stockReducer;
