import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

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
          <th>Details</th>
          <th>Delete</th>
        </tr>
       </thead>
       <tbody>
        {owners.map((owner, key) => {
          return (
            <tr key={key}>
              <td>{owner.firstName}  {owner.lastName}</td>
              <td>{owner.email}</td>
              <td>
                <Link to={`/owners/${owner.id}`}><button className="btn btn-outline-secondary" onClick={() => handleGetDetails(owner.id)}>Details</button> </Link>
              </td>
              <td><button className="btn btn-outline-secondary" onClick={() => handleDelete(owner.id)}>Delete</button>  </td>
            </tr>
          )
        })}
        </tbody>
      </Table>
    

    </div>
  )
}

export default ListAllOwners
