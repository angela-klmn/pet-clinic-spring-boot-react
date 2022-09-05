import React, { useState } from 'react'

const UpdateUser = ({owner,handelUpdateUser}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    let newUser = {"firstName": null, "lastName": null, "petIds": null, "email": null }

    const updateUser = () => {
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.email = email;
        handelUpdateUser(newUser, owner.id)
    }

  return (
    <div className='flexcontainer'>

    <div>
        
        <br/>
        <h1>Update User: </h1><br/>

        <form onSubmit={() => updateUser()} className="form">
        
            <label>First Name: </label><br />
            <input type="text" value={firstName} placeholder={owner.firstName} onChange={(e) => {setFirstName(e.target.value)}}  /><br />
             
            <label>Last Name: </label><br />
            <input type="text" value={lastName} placeholder={owner.lastName} onChange={(e) => {setLastName(e.target.value)}}/><br />
           
            <label>E-mail: </label><br />
            <input type="email" value={email} placeholder={owner.Email} onChange={(e) => {setEmail(e.target.value)}}/><br />
        
            <br />
            <input type="submit" value="Update" />
        </form>
        </div>
        
    </div>
  )
}

export default UpdateUser;
