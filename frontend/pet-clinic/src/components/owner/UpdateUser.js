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
        <h1 className={"add-label"}>Update Owner: </h1><br/>

        <form onSubmit={(e) =>{e.preventDefault(); updateOwner()}} className="form">

            <input class="textbox" type="text" placeholder="Firstname" value={firstName} placeholder={owner.firstName} onChange={(e) => {setFirstName(e.target.value)}}  /><br/><br/>

            <input class="textbox" type="text" placeholder="Lastname" value={lastName} placeholder={owner.lastName} onChange={(e) => {setLastName(e.target.value)}}/><br /><br/>

            <input class="textbox" placeholder="E-mail" type="email" value={email} placeholder={owner.email} onChange={(e) => {setEmail(e.target.value)}}/><br /><br/>

            <input class="textbox" type="text" placeholder="Phone number" value={phoneNumber} placeholder={owner.phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/><br /><br/>
        
            <br />
            <input type="submit" value="Update" className="button" />
        </form>
        </div>
        
    </div>
  )
}

export default UpdateUser;
