import React, {useState, useEffect} from 'react'
import myImage from '../../../src/images/dog_and_cat_2.jpg'
import UpdateUser from "../owner/UpdateUser";
import Table from 'react-bootstrap/Table';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { Link, useParams, useNavigate } from 'react-router-dom'
import UpdatePet from "./UpdatePet"


const PetDetails = () => {
    let {petId} = useParams();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    
    const [openUpdate, setOpenUpdate] = useState(false)
    const [pet, setPet] = useState({empty: true})
    const [visits, setVisits] = useState([])
    const [deletedAVisit, setDeletedAVisit] = useState(false)


    const handleDeletePet = async (petId) => {
      const response = await axiosPrivate.delete('/pets/' + petId);
      navigate(-1);
    }


    const handleDeleteVisit = async (visitId) => {
      const response = await axiosPrivate.delete('/visits/delete/' + visitId);
      deletedAVisit ? setDeletedAVisit(false) : setDeletedAVisit(true);
    
    }

    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)


    useEffect(() => {
      let isMounted = true;
  
      async function fetchData() {
        const resultPet = await axiosPrivate.get('/pets/' + petId);
        const resultVisits = await axiosPrivate.get('/visits/pet/' + petId);
        console.log("pet: " + resultPet)
        console.log("pet: " + resultPet.name)
        console.log("VISITS RESULT: " + resultVisits)
  
        if (isMounted) {
          setPet(resultPet.data);
          setVisits(resultVisits.data);
        }
      }
  
      fetchData();
  
      return () => {
        isMounted = false;
      };
    }, [deletedAVisit, openUpdate]);


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
        <p>Pet type: {pet.type} </p>
        <p>Age:   {getAge(pet.birthDate)} </p>
            
    </div>

    <div>
    <button className='btn btn-outline-secondary' onClick={() => setOpenUpdate(true)}>Update Pet</button><br/><br/>
    <button className='btn btn-outline-secondary' onClick={() => handleDeletePet(petId)}>Delete Pet</button><br/><br/>
            <Link to={`/visits/add/${pet.id}`}><button className='btn btn-outline-secondary'>Add new visit</button></Link>
            <br/><br/>
    </div>

    <div>
        <br />
       
    <img src={myImage} width={350} alt="doctor animals"/>
    </div>

        {openUpdate === true &&
            <UpdatePet pet={pet} setOpenUpdate={setOpenUpdate} />
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
              <td><button className="btn btn-outline-secondary" onClick={() => handleDeleteVisit(visit.id)}>Delete</button>  </td>
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
