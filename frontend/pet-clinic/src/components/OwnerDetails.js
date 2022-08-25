import React from 'react'
import myImage from '../../src/images/dog_and_cat_2.jpg'

const OwnerDetails = ({owner, handleCloseDetails}) => {
  return (
    <div className='flexcontainer'>
    
        <div>

        <br />
        <br/>
        <h1>Owner Profile Details: </h1><br/>
        <p>Owner Id: {owner.id} </p>
        <p>First name: <strong>{owner.firstName} </strong></p>
        <p>Last name: {owner.lastName} </p>
        <p>e mail adress: {owner.eMail} </p>

    <button className='btn btn-outline-secondary' onClick={() => handleCloseDetails()}>Close Details</button>  
    </div>

    <div>
        <br />
       
    <img src={myImage} width={450} alt="doctor animals"/>
    </div>
    </div>
  )
}

export default OwnerDetails
