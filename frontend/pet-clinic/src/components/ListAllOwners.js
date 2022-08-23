import React from 'react'

const ListAllOwners = ({owners}) => {
  return (
    <div>
      {/* <ul>
        {props.owners.map((item, i) => {
          return <li key={i}>{item.firstName} {item.lastName}</li>
        })}
      </ul> */}


      <table class="table table-striped">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">e-mail</th>
          <th scope="col">Some buttons</th>
        </tr>
        {owners.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.firstName}  {val.lastName}</td>
              <td>{val.eMail}</td>
              <td>
                <button class="btn btn-info"><a href={'http://localhost:8080/owners/'+val.id} alt='Broken Link'>Details</a></button>
                <button class="btn btn-info"><a href={'http://localhost:8080/owners/'+val.id} alt='Broken Link'>Delete</a></button>  
              </td>
            </tr>
          )
        })}
      </table>
    

    </div>
  )
}

export default ListAllOwners
