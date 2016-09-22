const React = require('react');
const moment = require('moment');
const uuid = require('uuid');

const ItemForm = React.createClass({
  submitForm(e) {
    e.preventDefault();

    const { titleInput, startTime, endTime } = this.refs;

    let item = {
      title: titleInput.value,
      start: startTime.value,
      end: endTime.value,
      submitted: moment().format('YYYY-MM-DD'),
      id: uuid()
    };

    titleInput.value = '';
    startTime.value = '';
    endTime.value = '';
    titleInput.focus();

    this.props.newItem(item);
  },

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="form-group">

          <input ref="titleInput" type="text" className="form-control" required/>
          <label>Title</label>
          <input ref="startTime" type="date" className="form-control" />
          <label>Start</label>
          <input ref="endTime" type="date" className="form-control" />
          <label>End</label>
          <br/>
          <button className="btn btn-default">Add</button>
        </div>
      </form>
    )
  }
});

module.exports = ItemForm;
