import React, {useState, useEffect} from 'react'
import myImage from '../../src/images/dog_and_cat_2.jpg'
import UpdateUser from "./UpdateUser";
import { Link, useParams } from 'react-router-dom'
import {apiGet} from '../dataHandler'
import PetCard from './PetCard';

const OwnerDetails = ({ handleUpdateUser, handleDelete}) => {
    let { ownerId } = useParams();
    console.log("owner id: " + ownerId)

    const [openUpdate, setOpenUpdate] = useState(false)
    const [owner, setOwner] = useState({empty: true})
    const [pets, setPets] = useState([])


    useEffect(() => {
      // 👇️ set isMounted to true
      let isMounted = true;
  
      async function fetchData() {
        const resultOwner = await apiGet('http://localhost:8080/owners/' + ownerId);
        const resultPets = await apiGet('http://localhost:8080/pets/owner/' + ownerId);
        console.log(resultOwner)
        console.log(resultPets)
  
        // 👇️ only update state if component is mounted
        if (isMounted) {
          setOwner(resultOwner);
          setPets(resultPets)
        }
      }
  
      fetchData();
  
      return () => {
        // 👇️ when component unmounts, set isMounted to false
        isMounted = false;
      };
    }, []);


  return (
    <div>
    <div className='flexcontainer'>
    
        <div>

        <br />
        <br/>
    
        <h1>Client Profile: </h1><br/>
        <p>Owner Id: {owner.id} </p>
        <p>First name: <strong>{owner.firstName} </strong></p>
        <p>Last name: {owner.lastName} </p>
        <p>E-mail address: {owner.email} </p>
        <p>Phone number: {owner.phoneNumber} </p>

           
    </div>

    <div>
    <button className='btn btn-outline-secondary' onClick={() => setOpenUpdate(true)}>Update Client Details</button><br/><br/>
    <button className="btn btn-outline-secondary" onClick={() => handleDelete(owner.id)}>Delete Client</button> <br/><br/>
            <Link to={`/pets/add/${owner.id}`}><button className='btn btn-outline-secondary'>Add new pet</button></Link>
            <br/><br/>
    </div>

    <div>
        <br />
       
    <img src={myImage} width={350} alt="doctor animals"/>
    </div>

        {openUpdate === true &&
            <UpdateUser owner={owner} handelUpdateUser={handleUpdateUser} />
        }

    
    
    </div>
    <hr></hr>

    <div>
    <h1>Pets of client:</h1><br/>


        <div className='flexcontainer'>
        {pets.map(pet => {
        return (
          <div key={pet.id}>
            <PetCard pet={pet} />
          </div>
        );
      })}
        </div>

    </div>


    </div>
  )
}

export default OwnerDetails
