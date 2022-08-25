import React, { useState, useEffect } from 'react'
import ListAllOwners from './components/ListAllOwners'
import Header from './components/Header'
import {apiGet, apiDelete, apiPost, apiPut} from './dataHandler'
import 'bootstrap/dist/css/bootstrap.min.css';
import OwnerDetails from './components/OwnerDetails';
import AddNewUser from './components/AddNewUser';


function App() {

  const [owners, fetchOwners] = useState([])
  const [owner, fetchOwner] = useState({empty: true})

  const getOwners = () => {
    apiGet('http://localhost:8080/owners').then(result => fetchOwners(result))
  }

  const getOwner = (ownerId) => {
    apiGet('http://localhost:8080/owners/' + ownerId).then(result => fetchOwner(result))
  }

  const handleDelete = (ownerId) => {
    apiDelete('http://localhost:8080/owners/' + ownerId).then(getOwners);
  }

  const handleGetDetails = (ownerId) => {
    getOwner(ownerId)
  }

  const handleCloseDetails = () => {
    fetchOwner({empty: true})
  }

const handelAddNewUser = (newUser) => {
  apiPost("http://localhost:8080/owners/add", newUser).then(getOwners())
}

  const handelUpdateUser = (newUser, ownerId) => {
    apiPut("http://localhost:8080/owners/update/"+ ownerId, newUser).then(getOwners())
  }


  useEffect(() => {
    getOwners()
    console.log("use effect")
  }, [])


  return (
    <div className='container'>
        <Header />
        <ListAllOwners owners={owners} handleDelete={handleDelete} handleGetDetails={handleGetDetails}/>

        {owner.empty != true &&
        <OwnerDetails owner={owner} handleCloseDetails={handleCloseDetails} handleUpdateUser={handelUpdateUser}/>
      }

      <hr />
      <AddNewUser handelAddNewUser={handelAddNewUser}/>
    </div>
  );
}

export default App;
