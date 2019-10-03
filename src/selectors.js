import { sortBy } from 'lodash';
import { createSelector } from 'reselect';

const getItems = state => state.items;
const getSortType = state => state.sortType;

const getSortedItems = (items, sortType) => {
  // console.log('sort!');
  if (sortType === 'A - Z') {
    return sortBy(items);
  } else if (sortType === 'Z - A') {
    return sortBy(items).reverse();
  } else {
    return items;
  }
};

const getSortedItemsSelector = createSelector(
  [getItems, getSortType],
  (items, typeOfSort) => getSortedItems(items, typeOfSort)
);

export { getSortedItems, getSortedItemsSelector };
