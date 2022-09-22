import React, { useState } from 'react'
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const UpdateUser = ({pet, setOpenUpdate}) => {

  const petTypes = ["DOG", "CAT", "CROCODILE", "BUNNY", "FISH"]

    const [petName, setPetName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [petType, setPetType] = useState('')
    const axiosPrivate = useAxiosPrivate();

    let newPet = {"name": null, "birthDate": null, "type": null}

    const updatePet = () => {
        newPet.name = petName;
        newPet.birthDate = birthDate;
        //newPet.type = petType;
        handelUpdateOwner(newPet, pet.id)
    }

    const handelUpdateOwner = async (newUser, petId) => {
      const response = await axiosPrivate.put("/pets/update/"+ petId, newUser);
      setOpenUpdate(false);
    
    }


  return (
    <div className='flexcontainer'>

    <div>
        
        <br/>
        <h1>Update Owner: </h1><br/>

        <form onSubmit={(e) =>{e.preventDefault(); updatePet()}} className="form">
        
            <label>Pet's Name: </label><br />
            <input type="text" value={petName} placeholder={pet.name} onChange={(e) => {setPetName(e.target.value)}}  /><br />
             
            <label>Birth Date </label><br />
            <input type="date" value={birthDate} placeholder={pet.birthDate} onChange={(e) => {setBirthDate(e.target.value)}}/><br />
           
            {/* <label>E-mail: </label><br />
            <input type="email" value={petType} placeholder={pet.type} onChange={(e) => {setPetType(e.target.value)}}/><br /> */}


            <label for="type">Choose a pet type:</label><br />
                <select id="type" name="type" placeholder={pet.type} onChange={(e) => {setPetType(e.target.value)}}>
                <option key="1" value="" disabled selected>Select your option</option>
                {petTypes.map(petType =>
                    <option key={petType} value={petType}>{petType}</option>
                    )};
                </select>
        
            <br />
            <input type="submit" value="Update" />
        </form>
        </div>
        
    </div>
  )
}

export default UpdateUser;
