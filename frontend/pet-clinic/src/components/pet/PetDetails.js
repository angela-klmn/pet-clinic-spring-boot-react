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

        <div className='flexcontainer profile-container'>

            <div className="card profile-card">
                <div className="container profile-container">
                    <img className={"profile-img"}
                         src="https://kb.rspca.org.au/wp-content/uploads/2021/07/collie-beach-bokeh.jpg"
                         alt="profile-img"></img>
                    <h2 className={"profile-h2"}>{pet.name}</h2>
                    <small>Pet id: {pet.id}</small><br/>
                    <small>{pet.birthDate}</small><br/>
                    <small>{pet.type}</small><br/>
                    <small>Age: {getAge(pet.birthDate)}</small><br/>
                    <div className="bar">
                        <button className='btn' onClick={() => setOpenUpdate(true)}>
                            <i className="far fa-smile"></i>
                            <span>Update details</span>
                        </button>
                        <button className="btn btn-outline-secondary" onClick={() => handleDeletePet(petId)}>
                            <i className="far fa-smile"></i>
                            <span>Delete pet</span>
                        </button>
                        <Link to={`/visits/add/${pet.id}`}>
                            <button className='btn btn-outline-secondary'>
                                <i className="far fa-smile"></i>
                                <span>Add new visit</span>
                            </button>
                        </Link>
                        <br/><br/>
                    </div>
                </div>
            </div>

            <div>
                <br />

            </div>

            {openUpdate === true &&
                <UpdatePet pet={pet} setOpenUpdate={setOpenUpdate} />
            }


        </div>

    <hr></hr>

    <div>
    <h1 className="add-label">Visits of the pet:</h1><br/>


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
