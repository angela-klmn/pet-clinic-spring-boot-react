import React, { useState } from 'react'
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const UpdateUser = ({owner, setOpenUpdate}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const axiosPrivate = useAxiosPrivate();

    let newUser = {"firstName": null, "lastName": null, "petIds": null, "email": null, "phoneNumber": null }

    const updateOwner = () => {
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.email = email;
        newUser.phoneNumber = phoneNumber;
        handelUpdateOwner(newUser, owner.id)
    }

    const handelUpdateOwner = async (newUser, ownerId) => {
      const response = await axiosPrivate.put("/owners/update/"+ ownerId, newUser);
      setOpenUpdate(false);
    
    }


  return (
    <div className='flexcontainer'>

    <div>
        
        <br/>
        <h1>Update Owner: </h1><br/>

        <form onSubmit={(e) =>{e.preventDefault(); updateOwner()}} className="form">
        
            <label>First Name: </label><br />
            <input type="text" value={firstName} placeholder={owner.firstName} onChange={(e) => {setFirstName(e.target.value)}}  /><br />
             
            <label>Last Name: </label><br />
            <input type="text" value={lastName} placeholder={owner.lastName} onChange={(e) => {setLastName(e.target.value)}}/><br />
           
            <label>E-mail: </label><br />
            <input type="email" value={email} placeholder={owner.email} onChange={(e) => {setEmail(e.target.value)}}/><br />

            <label>Phone number: </label><br />
            <input type="text" value={phoneNumber} placeholder={owner.phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/><br />
        
            <br />
            <input type="submit" value="Update" />
        </form>
        </div>
        
    </div>
  )
}

export default UpdateUser;
