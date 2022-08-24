import React, { useState } from 'react'
import myImage from '../../src/images/cat_1.jpg'

const AddNewUser = ({handelAddNewUser}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [eMail, seteMail] = useState('')

    let newUser = {"firstName": "Tina", "lastName": "Turner", "petIds": null, "eMail": "tina@turner.com" }

    const addNewUser = () => {
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.eMail = eMail;
        console.log(newUser);
        console.log("what?");
        handelAddNewUser(newUser);
    }

  return (
    <div className='flexcontainer'>
        <div>
        <br />
       
    <img src={myImage} width={350} alt="doctor animals"/>
    </div>

    <div>
        
        <br/>
        <h1>Add new User: </h1><br/>

        <form onSubmit={() => addNewUser()} className="form">
        
            <label>First Name: </label><br />
            <input type="text" required value={firstName} onChange={(e) => {setFirstName(e.target.value)}}  /><br />
             
            <label>Last Name: </label><br />
            <input type="text" required value={lastName} onChange={(e) => {setLastName(e.target.value)}}/><br />
           
            <label>E mail: </label><br />
            <input type="email" required value={eMail} onChange={(e) => {seteMail(e.target.value)}}/><br />
        
            <br />
            <input type="submit" value="Add New User" />
            <p>{firstName}</p>
        </form>
        </div>
        
    </div>
  )
}

export default AddNewUser;
