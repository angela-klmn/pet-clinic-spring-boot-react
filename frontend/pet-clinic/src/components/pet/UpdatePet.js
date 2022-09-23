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
        <h1 className={"add-label"}>Update Pet </h1><br/>

        <form onSubmit={(e) =>{e.preventDefault(); updatePet()}} className="form">

            <input class="textbox" type="text" placeholder="Pet's Name"  value={petName} placeholder={pet.name} onChange={(e) => {setPetName(e.target.value)}}  /><br /><br />

            <input class="textbox" type="date" value={birthDate} placeholder={pet.birthDate} onChange={(e) => {setBirthDate(e.target.value)}}/><br /><br />
           
            {/* <label>E-mail: </label><br />
            <input type="email" value={petType} placeholder={pet.type} onChange={(e) => {setPetType(e.target.value)}}/><br /> */}

                <select class="textbox" id="type" name="type" placeholder={pet.type} onChange={(e) => {setPetType(e.target.value)}}>
                <option key="1" value="" disabled selected>Select pet type</option>
                {petTypes.map(petType =>
                    <option key={petType} value={petType}>{petType}</option>
                    )};
                </select><br />
        
            <br />
            <input type="submit" value="Update" className="button"/>
        </form>
        </div>
        
    </div>
  )
}

export default UpdateUser;
