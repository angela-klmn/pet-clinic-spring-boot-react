import React from 'react'

const ListAllOwners = ({owners}) => {
  return (
    <div>
      {/* <ul>
        {props.owners.map((item, i) => {
          return <li key={i}>{item.firstName} {item.lastName}</li>
        })}
      </ul> */}


      <table>
        <tr>
          <th>Name</th>
          <th>e-mail</th>
          <th>Some buttons</th>
        </tr>
        {owners.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.firstName}  {val.lastName}</td>
              <td>{val.eMail}</td>
              <td><button><a href='https://google.com' alt='Broken Link'>This is a button</a></button></td>
            </tr>
          )
        })}
      </table>
    

    </div>
  )
}

export default ListAllOwners
