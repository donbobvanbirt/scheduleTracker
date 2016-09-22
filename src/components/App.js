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
    });
  },

  edit(newState) {
    this.setState({
      items: newState
    })
  },

  removeItem(id) {
    const { items } = this.state;
    let newItems = items.filter(item => item.id !== id);
    this.edit(newItems);
  },

  componentWillMount() {
    const serializedData = localStorage.savedState;
    let savedState;

    try {
      savedState = JSON.parse(serializedData);
      this.setState(savedState);
    } catch(err) {
      console.log('Local Storage ERROR');
    }
  },

  componentWillUpdate(nextProps, nextState) {
    const serializedData = JSON.stringify(nextState);
    localStorage.savedState = serializedData;
  },

  render() {
    const { items } = this.state;
    return (
      <div className="container">
        <h1>Schedule Tracker</h1>
        <ItemForm newItem={this.newItem}/>
        <ItemList items={items} edit={this.edit} removeItem={this.removeItem}/>
      </div>
    )
  }
});

module.exports = App;
