import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ListAllOwners = ({owners, handleDelete, handleGetDetails}) => {
  return (
    <div>
      {/* <ul>
        {props.owners.map((item, i) => {
          return <li key={i}>{item.firstName} {item.lastName}</li>
        })}
      </ul> */}


      <Table striped bordered hover>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">e-mail</th>
          <th scope="col">Some buttons</th>
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
