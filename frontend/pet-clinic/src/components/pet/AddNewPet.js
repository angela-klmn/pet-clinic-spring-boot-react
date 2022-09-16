import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import myImage from '../../../src/images/cat_1.jpg'

const AddNewPet = ({handelAddNewPet}) => {

    const petTypes = ["DOG", "CAT", "CROCODILE", "BUNNY", "FISH"]

    let { ownerId } = useParams();
    const [name, setName] = useState('')
    const [petType, setPetType] = useState('')
    const [birthDate, setBirthDate] = useState('')

    let newPet = {"name": "Buksi", "birthDate": "2022.08.08.", "type": "DOG"}

    const addNewPet = () => {
        newPet.name = name;
        newPet.type = petType;
        newPet.birthDate = birthDate;
        console.log("birthdate: " + birthDate)
        handelAddNewPet(newPet, ownerId);
    
    }

  return (
    <div className='flexcontainer'>
        <div>
        <br />
       
    <img src={myImage} width={350} alt="doctor animals"/>
    </div>

    <div>
        
        <br/>
        <h1>Add new Pet: </h1><br/>

        <form onSubmit={(e) => {e.preventDefault(); addNewPet()}} className="form">
        
            <label>Name: </label><br />
            <input type="text" required value={name} onChange={(e) => {setName(e.target.value)}}  /><br />
             
            {/* <label>Pet type: </label><br />
            <input type="text" required value={petType} onChange={(e) => {setPetType(e.target.value)}}/><br /> */}
           
            <label>Birth date: </label><br />
            <input type="date" required value={birthDate} onChange={(e) => {setBirthDate(e.target.value)}}/><br />

            <label for="type">Choose a pet type:</label><br />
                <select id="type" name="type" required onChange={(e) => {setPetType(e.target.value)}}>
                <option key="1" value="" disabled selected>Select your option</option>
                {petTypes.map(petType =>
                    <option key={petType} value={petType}>{petType}</option>
                    )};
                </select>
        
            <br /><br />
            
            <input type="submit" value="Add New Pet" />
        </form>
        </div>
        
    </div>
  )
}

export default AddNewPet;
