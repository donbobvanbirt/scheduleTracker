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
      submitted: moment().format('MMM Do, h:mm a'),
      id: uuid()
    };
    
    // let newTitle = titleInput.value;
    // let newStart = startTime.value;
    // let newEnd = endTime.value;

    titleInput.value = '';

    titleInput.focus();
    // console.log('submitForm working');
    this.props.newItem(item);
    // this.props.newItem(newTitle);
  },

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="form-group">

          <input ref="titleInput" type="text" className="form-control" />
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
