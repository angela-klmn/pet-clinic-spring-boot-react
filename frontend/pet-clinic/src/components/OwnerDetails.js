import React from 'react'

const OwnerDetails = ({owner, handleCloseDetails}) => {
  return (
    <div>
        <br/>
        <h1>Owner Profile Details: </h1><br/>
        <p>Owner Id: {owner.id} </p>
        <p>First name: <strong>{owner.firstName} </strong></p>
        <p>Last name: {owner.lastName} </p>
        <p>e mail adress: {owner.eMail} </p>

    <button onClick={() => handleCloseDetails()}>Close Details</button>  
    </div>
  )
}

export default OwnerDetails
