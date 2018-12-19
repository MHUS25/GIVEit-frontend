import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu';

class TableListings extends Component {
  render() {
    const { listings, removeList } = this.props;

    return (
      <Menu>
      <table>
        <TableHeader />
        <TableBody listings={listings}
          removeList={removeList} />
      </table>
      </Menu>
    );
  }
}

export default TableListings;

const TableHeader = () => {
  return (

    <thead>

      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Listing Type</th>
        <th>Location</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Postee</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.listings.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.description}</td>
        <td>{row.start_date}</td>
        <td>{row.end_date}</td>
        <td>{row.listing_type}</td>
        <td>{row.location}</td>
        <td>{row.phone_number}</td>
        <td>{row.email}</td>
        <td>{row.user_name}</td>
        <td>
          <button className='delete' onClick={() => props.removeList(row.id, index)}>Delete</button>
        </td>
      </tr>

    );
  });

  return <tbody>{rows}</tbody>;
};
