import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ListAllOwners = ({owners, handleDelete, handleGetDetails}) => {
  return (
    <div>
      <hr />
      <br />
   

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>e-mail</th>
          <th>Some buttons</th>
        </tr>
       </thead>
       <tbody>
        {owners.map((owner, key) => {
          return (
            <tr key={key}>
              <td>{owner.firstName}  {owner.lastName}</td>
              <td>{owner.eMail}</td>
              <td>
                <button onClick={() => handleGetDetails(owner.id)}>Details</button>
                <button onClick={() => handleDelete(owner.id)}>Delete</button>  
              </td>
            </tr>
          )
        })}
        </tbody>
      </Table>
    

    </div>
  )
}

export default ListAllOwners
