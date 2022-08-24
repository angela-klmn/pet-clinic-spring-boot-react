import React, { useState, useEffect } from 'react'
import ListAllOwners from './components/ListAllOwners'
import Header from './components/Header'
import { apiGet, apiDelete, apiPost } from './dataHandler'
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
    console.log('http://localhost:8080/owners/' + ownerId)
    apiGet('http://localhost:8080/owners/' + ownerId).then(result => fetchOwner(result))
    
  }

  const handleDelete = (ownerId) => {
    console.log('This will delet owner with id:' + ownerId)
    apiDelete('http://localhost:8080/owners/' + ownerId).then(getOwners);
    // getOwners();

    // const newOwners= owners.filter(owner => owner.id != ownerId);
    // fetchOwners(newOwners);
  }

  const handleGetDetails = (ownerId) => {
    console.log('This will get owner with id:' + ownerId)
    getOwner(ownerId)
  }

  const handleCloseDetails = () => {
    fetchOwner({empty: true})
  }

const handelAddNewUser = (newUser) => {
  apiPost("http://localhost:8080/owners/add", newUser).then(getOwners())
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
        <OwnerDetails owner={owner} handleCloseDetails={handleCloseDetails}/>
        
      }
      <hr />
      <AddNewUser handelAddNewUser={handelAddNewUser}/>


    </div>
  );
}

export default App;
