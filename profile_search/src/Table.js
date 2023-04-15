import React from 'react'

const table = ({data}) => {
  return (
    <table>
      <tbody>
        <tr>
          <th> Profile</th>
          <th>Id</th>
          <th>Title</th>
          <th> First Name</th>
          <th> Last Name</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.picture}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default table
