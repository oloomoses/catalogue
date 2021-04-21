import axios from 'axios';
import {
  GET_COMPANIES,
  FILTER,
  SET_LOADING,
  GET_COMPANY,
  GET_SECTORS,
} from '../type';

const setLoading = () => ({
  type: SET_LOADING,
});

const getCompanies = (data) => ({
  type: GET_COMPANIES,
  payload: data,
});

const filter = (data) => ({
  type: FILTER,
  payload: data,
});

const getCompany = (data) => ({
  type: GET_COMPANY,
  payload: data,
});

const getSectors = (data) => ({
  type: GET_SECTORS,
  payload: data,
});

export const fetchdata = () => async (dispatch) => {
  const url = 'https://financialmodelingprep.com/api/v3/actives?apikey=3830446fe7a4c1873641ce52d4681a53';
  dispatch(setLoading());
  const res = await axios.get(url);
  dispatch(getCompanies(res.data));
};

export const filterStock = (stock) => async (dispatch) => {
  const url = `https://financialmodelingprep.com/api/v3/${stock}?apikey=3830446fe7a4c1873641ce52d4681a53`;
  dispatch(setLoading());
  const res = await axios.get(url);
  dispatch(filter(res.data));
};

export const companyData = (ticker) => async (dispatch) => {
  const url = `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=3830446fe7a4c1873641ce52d4681a53`;
  dispatch(setLoading());

  const res = await axios(url);
  dispatch(getCompany(res.data[0]));
};

export const fetchSectors = () => async (dispatch) => {
  const url = 'https://financialmodelingprep.com/api/v3/sectors-performance?apikey=3830446fe7a4c1873641ce52d4681a53';
  dispatch(setLoading());

  const res = await axios(url);
  dispatch(getSectors(res.data));
};
