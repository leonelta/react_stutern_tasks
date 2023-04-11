import React from 'react'

const Table = ({data}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Profile</th>
                <th>id</th>
                <th>Title</th>
                <th>FirstName</th>
                <th>LastName</th>
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
  )
}

export default Table
