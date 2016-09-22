const React = require('react');
const ItemForm = require('./ItemForm');
const ItemList = require('./ItemList');

const App = React.createClass({
  getInitialState() {
    return {
      items: []
    }
  },

  newItem(item) {
    let { items } = this.state;

    this.setState({
      items: [...items, item]
    }, console.log("item", item));
  },

  render() {
    const { items } = this.state;
    return (
      <div className="container">
        <h1>Schedule Tracker</h1>
        <ItemForm newItem={this.newItem}/>
        <ItemList items={items}/>
      </div>
    )
  }
});

module.exports = App;
