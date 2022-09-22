import React, { useState, useEffect } from 'react'

import AuthContext from "../../context/AuthProvider";
import { useContext } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { Link, useParams, useNavigate } from 'react-router-dom'
import PetCardForClients from "./PetCardForClients"

const ClientPets = () => {
  const { auth } = useContext(AuthContext);
  const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

  const [owner, setOwner] = useState({empty: true})
    const [pets, setPets] = useState([])
    


  useEffect(() => {
    // 👇️ set isMounted to true
    let isMounted = true;

    async function fetchData() {
      const username = auth.user;

      const resultOwner = await axiosPrivate.get('/owners/username/' + username);
      const ownerId = resultOwner.data.id;
      console.log("ownerId: ", ownerId)


      //const resultOwner = await axiosPrivate.get('/owners/' + ownerId);
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
  }, []);


  return (
    <div>
    <div>
    
        <div>

        <br />
        <br/>

        {(pets.length==0) &&
        <div>
            <h2>Currently I don't have any pets in the system.</h2>
            </div> }
            
        {(pets.length!=0) &&
            <div>
            <br/>
  
  
                <div className='flexcontainer'>
                {pets.map(pet => {
                return (
                  <div key={pet.id}>
                    <PetCardForClients pet={pet} />
                  </div>
                );
              })}
                </div>
  
            </div>
        }

<br/>
<hr></hr>
<br/>
    
        <h3>The clinick has the the following information about me: </h3><br/>
        <p>First name: <strong>{owner.firstName} </strong></p>
        <p>Last name: {owner.lastName} </p>
        <p>E-mail address: {owner.email} </p>
        <p>Phone number: {owner.phoneNumber} </p>

           
    </div>

  

    <div>
        <br />
       
    
    </div>
    <hr></hr>

         
    </div>
    </div>

  )
}

export default ClientPets
