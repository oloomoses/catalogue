import axios from 'axios';
import {
  GET_COMPANIES,
  FILTER,
  SET_LOADING,
  GET_COMPANY,
} from '../type';

const setLoading = () => ({
  type: SET_LOADING,
});

const getCompanies = () => ({
  type: GET_COMPANIES,
});

const filter = async (stock) => {
  const url = `https://financialmodelingprep.com/api/v3/${stock}?apikey=3830446fe7a4c1873641ce52d4681a53`;
  setLoading();
  const res = await axios.get(url);
  return {
    type: FILTER,
    payload: res.data,
  };
};

const getCompany = async (ticker) => {
  const url = `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=3830446fe7a4c1873641ce52d4681a53`;
  setLoading();

  const res = await axios(url);
  return {
    type: GET_COMPANY,
    payload: res.data[0],
  };
};

export default {
  setLoading, getCompany, getCompanies, filter,
};
