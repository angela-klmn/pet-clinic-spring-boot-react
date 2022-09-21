import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
    
        <h1>The clicik has the the following information about me: </h1><br/>
        <p>Owner Id: {owner.id} </p>
        <p>First name: <strong>{owner.firstName} </strong></p>
        <p>Last name: {owner.lastName} </p>
        <p>E-mail address: {owner.email} </p>
        <p>Phone number: {owner.phoneNumber} </p>

           
    </div>

  

    <div>
        <br />
       
    
    </div>
    <hr></hr>

    <div>
    <h1>Here are my pets:</h1><br/>


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
    </div>
    </div>

  )
}

export default ClientPets
