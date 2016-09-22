const React = require('react');

const ItemList = props => {
  const { items } = props;

  console.log("items:", items);

  let Items = items.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item.title}</td>
        <td>{item.start}</td>
        <td>{item.end}</td>
        <td>{item.submitted}</td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
    )
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
        {Items}
      </tbody>

    </table>
    //
    //
    // <ul>
    //   {items.map((item, i) => (
    //     <li key={i}></li>
    //   ))}
    // </ul>
  )
}

module.exports = ItemList;
