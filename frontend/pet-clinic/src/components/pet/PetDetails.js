import React, {useState, useEffect} from 'react'
import myImage from '../../../src/images/dog_and_cat_2.jpg'
import UpdateUser from "../owner/UpdateUser";
import { Link, useParams } from 'react-router-dom'
import {apiGet} from '../../dataHandler'
import Table from 'react-bootstrap/Table';


const PetDetails = ({ handleUpdateUser, handleDeleteVisit, handleDeletePet}) => {
    let {petId} = useParams();

    console.log("pet id: " + petId)
    

    const [openUpdate, setOpenUpdate] = useState(false)
    const [pet, setPet] = useState({empty: true})
    const [visits, setVisits] = useState([])


    useEffect(() => {
      // 👇️ set isMounted to true
      let isMounted = true;
  
      async function fetchData() {
        const resultPet = await apiGet('http://localhost:8080/pets/' + petId);
        const resultVisits = await apiGet('http://localhost:8080/visits/pet/' + petId);
        console.log("pet: " + resultPet)
        console.log("pet: " + resultPet.name)
        console.log(resultVisits)
  
        // 👇️ only update state if component is mounted
        if (isMounted) {
          setPet(resultPet);
          setVisits(resultVisits)
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
    
        <h1>Pet Profile: </h1><br/>
        <p>Pet Id: {pet.id} </p>
        <p>Name: <strong>{pet.name} </strong></p>
        <p>Birth date: {pet.birthDate} </p>
        <p>Age:  </p>
            
    </div>

    <div>
    <button className='btn btn-outline-secondary' onClick={() => setOpenUpdate(true)}>Update Pet</button><br/><br/>
    <button className='btn btn-outline-secondary' onClick={() => handleDeletePet(petId, pet.ownerId)}>Delete Pet</button><br/><br/>
            <Link to={`/visits/add/${pet.id}`}><button className='btn btn-outline-secondary'>Add new visit</button></Link>
            <br/><br/>
    </div>

    <div>
        <br />
       
    <img src={myImage} width={350} alt="doctor animals"/>
    </div>

        {openUpdate === true &&
            <UpdateUser owner={pet} handelUpdateUser={handleUpdateUser} />
        }

    
    
    </div>
    <hr></hr>

    <div>
    <h1>Visits of the pet:</h1><br/>


<Table striped bordered hover>
      <thead>
        <tr>
        <th>Date</th>
          <th>Description</th>
          <th>type</th>
          <th>Price</th>
          <th>Buttons</th>
        </tr>
       </thead>
       <tbody>
        {visits.map((visit, key) => {
          return (
            <tr key={key}>
            <td>{visit.date}</td>
              <td>{visit.description}</td>
              <td>{visit.treatmentType}</td>
              <td>{visit.price}</td>
              <td><button className="btn btn-outline-secondary" onClick={() => handleDeleteVisit(visit.id, petId)}>Delete</button>  </td>
            </tr>
          )
        })}
        </tbody>
      </Table>

    </div>


    </div>
  )
}

export default PetDetails
