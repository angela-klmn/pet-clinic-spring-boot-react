import React, {useState, useEffect } from 'react'
import myImage from '../../../src/images/dog_and_cat_2.jpg'
import UpdateUser from "./UpdateUser";
import { Link, useParams, useNavigate } from 'react-router-dom'
import PetCard from '../pet/PetCard';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import "../../css/card.css";

const OwnerDetails = () => {
  
    let { ownerId } = useParams();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    console.log("owner id: " + ownerId)

    const [openUpdate, setOpenUpdate] = useState(false)
    const [owner, setOwner] = useState({empty: true})
    const [pets, setPets] = useState([])

    const handleDelete = async (ownerId) => {
      const response = await axiosPrivate.delete('/owners/' + ownerId);
      navigate("/owners");
      
    }


    useEffect(() => {
      // 👇️ set isMounted to true
      let isMounted = true;
  
      async function fetchData() {
        const resultOwner = await axiosPrivate.get('/owners/' + ownerId);
        const resultPets = await axiosPrivate.get('/pets/owner/' + ownerId);
        console.log(resultOwner)
        console.log(resultPets)
  
        // 👇️ only update state if component is mounted
        if (isMounted) {
          setOwner(resultOwner.data);
          setPets(resultPets.data);
        }
      }
  
      fetchData();
  
      return () => {
        // 👇️ when component unmounts, set isMounted to false
        isMounted = false;
      };
    }, [openUpdate]);


  return (
    <div>
    <div className='flexcontainer profile-container'>

        <div className="card profile-card">
            <div className="container profile-container">
                <img className={"profile-img"}
                    src="https://www.gratefulweb.com/sites/default/files/images/articles/unnamed%2839%29_0.jpg"
                    alt="profile-img"></img>
                <h2 className={"profile-h2"}>{owner.firstName +" "+owner.lastName}</h2>
                <small>Owner id: {owner.id}</small><br/>
                <small>{owner.email}</small><br/>
                <small>{owner.phoneNumber}</small><br/>
                <div className="bar">
                    <button className='btn' onClick={() => setOpenUpdate(true)}>
                        <i className="far fa-smile"></i>
                        <span>Update details</span>
                    </button>
                    <button className="btn btn-outline-secondary" onClick={() => handleDelete(owner.id)}>
                        <i className="far fa-smile"></i>
                        <span>Delete client</span>
                    </button>
                    <Link to={`/pets/add/${owner.id}`}>
                        <button className='btn btn-outline-secondary'>
                            <i className="far fa-smile"></i>
                            <span>Add new pet</span>
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
            <UpdateUser owner={owner} setOpenUpdate={setOpenUpdate}/>
        }

    
    </div>
    <hr></hr>

        <h1 className={"add-label"}>Pets of client:</h1><br/>
    <div className='flexcontainer'>


        {pets.map(pet => {
        return (
            <ul className="cards">
              <div key={pet.id}>
                <PetCard pet={pet} />
              </div>
            </ul>
        );
      })}

    </div>
    </div>
  )
}

export default OwnerDetails
