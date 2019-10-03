export const ADD_ITEM = 'ADD_ITEM';
export const SET_SORT = 'SET_SORT';
export const SORT_ITEMS = 'SORT_ITEMS';
export const FILTER_ITEMS = 'FILTER_ITEMS';
export const SET_BOOL = 'SET_BOOL';

export function addItem(text) {
  return {
    type: ADD_ITEM,
    text,
  };
}

export function setSort(sortType) {
  return {
    type: SET_SORT,
    sortType,
  };
}

export function sortItems() {
  return {
    type: SORT_ITEMS,
  };
}

export function filterItems() {
  return {
    type: FILTER_ITEMS,
  };
}

export function setBool(bool) {
  return {
    type: SET_BOOL,
    bool,
  };
}
