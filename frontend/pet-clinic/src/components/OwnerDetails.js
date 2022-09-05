import React, {useState} from 'react'
import myImage from '../../src/images/dog_and_cat_2.jpg'
import UpdateUser from "./UpdateUser";

const OwnerDetails = ({owner, handleCloseDetails, handleUpdateUser}) => {

    const [openUpdate, setOpenUpdate] = useState(false)

  return (
    <div className='flexcontainer'>
    
        <div>

        <br />
        <br/>
        <h1>Owner Profile: </h1><br/>
        <p>Owner Id: {owner.id} </p>
        <p>First name: <strong>{owner.firstName} </strong></p>
        <p>Last name: {owner.lastName} </p>
        <p>E-mail address: {owner.email} </p>
        <p>Phone number: {owner.phoneNumber} </p>

            <button className='btn btn-outline-secondary' onClick={() => setOpenUpdate(true)}>Update</button>
            <button className='btn btn-outline-secondary' onClick={() => handleCloseDetails()}>Close Details</button>
    </div>

    <div>
        <br />
       
    <img src={myImage} width={350} alt="doctor animals"/>
    </div>

        {openUpdate === true &&
            <UpdateUser owner={owner} handelUpdateUser={handleUpdateUser} />
        }

    </div>
  )
}

export default OwnerDetails
