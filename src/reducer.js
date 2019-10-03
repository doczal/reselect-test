import {
  ADD_ITEM,
  SORT_ITEMS,
  FILTER_ITEMS,
  SET_SORT,
  SET_BOOL,
} from './actions';

const initialState = {
  items: [],
  sortType: 'A - Z',
  bool: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.text],
      };
    case SET_SORT:
      return {
        ...state,
        sortType: action.sortType,
      };
    case SET_BOOL:
      return {
        ...state,
        bool: action.bool,
      };
    case SORT_ITEMS:
      return state;
    case FILTER_ITEMS:
      return state;
    default:
      return state;
  }
}

export default rootReducer;
