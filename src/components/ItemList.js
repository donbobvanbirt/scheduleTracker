const React = require('react');

const ItemList = React.createClass({
  getInitialState() {
    return {
      editing: ''
    }
  },

  editItem(id) {
    console.log('editing', id);
    this.setState({
      editing: id
    })
  },

  onChange(name, index) {
    const { title, start, end } = this.refs;
    const { edit, items } = this.props;
    let newItems = items;

    switch (name) {
      case "title":
        newItems[index][name] = title.value;
        edit(newItems);
      break;
      case "start":
        newItems[index][name] = start.value;
        edit(newItems);
      break;
      case "end":
        newItems[index][name] = end.value;
        edit(newItems);
      break;
    }
  },

  endEdit() {
    this.setState({
      editing: ''
    })
  },

  render() {
    const { items, edit, removeItem } = this.props;
    const { editing } = this.state;

    let sortedItems = items.sort((a, b) => {
      return a.end.replace(/-/g, "") - b.end.replace(/-/g, "");
    })

    let tableBody = items.map((item, index) => {
      if (item.id === this.state.editing) {
        return (
          <tr key={item.id}>
            <td>
              <input ref="title" type="text" value={item.title} onChange={this.onChange.bind(this, "title", index)} required/>
            </td>
            <td>
              <input ref="start" type="date" value={item.start} onChange={this.onChange.bind(this, "start", index)} />
            </td>
            <td>
              <input ref="end" type="date" value={item.end} onChange={this.onChange.bind(this, "end", index)} />
            </td>
            <td>{item.submitted}</td>
            <td><button onClick={() => {this.endEdit()}} className="btn btn-sm btn-success">Save</button></td>
            <td><button onClick={removeItem.bind(null, item.id)}  className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button></td>
          </tr>
        )
      } else {
        return (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.start}</td>
            <td>{item.end}</td>
            <td>{item.submitted}</td>
            <td><button onClick={() => {this.editItem(item.id)}} className="btn btn-sm btn-default"><i className="fa fa-edit"></i></button></td>
            <td><button onClick={removeItem.bind(null, item.id)}  className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button></td>
          </tr>
        )
      }
    })

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Submitted</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>

      </table>
    )
  }
});

module.exports = ItemList;
