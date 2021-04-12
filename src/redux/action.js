const GET_ITEMS = 'GET_ITEMS';
const GET_ITEM = 'GET_ITEM';

const getItems = (payload) => ({
  type: GET_ITEMS,
  payload,
});

const getItem = (payload) => ({
  type: GET_ITEM,
  payload,
});

export {
  GET_ITEMS,
  GET_ITEM,
  getItems,
  getItem,
};
