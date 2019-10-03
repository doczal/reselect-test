import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem, setSort, setBool } from './actions';
import { getSortedItems, getSortedItemsSelector } from './selectors';
import { sortBy } from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      bool: false,
    };
  }

  handleClick = () => {
    this.setState(
      prevState => {
        return {
          count: prevState.count + 1,
        };
      },
      () => {
        this.props.addItem(`Item ${this.state.count}`);
      }
    );
  };

  render() {
    const {
      items,
      setSort,
      sortType,
      sortedItems,
      // localSortedItems,
      // bool,
      setBool,
    } = this.props;
    // const localSorted =
    //   sortType === 'A - Z' ? sortBy(items) : sortBy(items).reverse();
    // console.log(sortedItems);
    console.log('rerender');
    return (
      <div className="App">
        <ul>
          {sortedItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <button onClick={this.handleClick}>Add Item</button>
        <button onClick={() => setSort('A - Z')}>Sort A - Z</button>
        <button onClick={() => setSort('Z - A')}>Sort Z - A</button>
        <button onClick={() => setBool(true)}>Set to true</button>
        <button onClick={() => setBool(false)}>Set to false</button>
      </div>
    );
  }
}

const sortItems = (items, sortType) => {
  console.log('local sort');
  return sortType === 'A - Z' ? sortBy(items) : sortBy(items).reverse();
};

const mapStateToProps = state => ({
  items: state.items,
  sortType: state.sortType,
  // sortedItems: getSortedItemsSelector(state),
  sortedItems: getSortedItems(state.items, state.sortType),
  // localSortedItems: sortItems(state.items, state.sortType),
  // bool: state.bool,
});

const mapDispatchToProps = {
  addItem,
  setSort,
  setBool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
