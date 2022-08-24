import React, { useState, useEffect } from 'react'
import ListAllOwners from './components/ListAllOwners'
import Header from './components/Header'
import { apiGet, apiDelete } from './dataHandler'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [owners, fetchOwners] = useState([])
  const [owner, fetchOwner] = useState({})

  const getOwners = () => {
    apiGet('http://localhost:8080/owners').then(result => fetchOwners(result))
  }

  const getOwner = (ownerId) => {
    console.log('http://localhost:8080/owners/' + ownerId)
    apiGet('http://localhost:8080/owners/' + ownerId)
    .then(result => fetchOwner(result))
    .then(console.log(owner))
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
    // const currentOwner = owners.filter(owner => owner.id === ownerId)[0]
    getOwner(ownerId)
  
  }

  useEffect(() => {
    getOwners()
  }, [])


  return (
    <div className='container'>


        <Header />
        
        <ListAllOwners owners={owners} handleDelete={handleDelete} handleGetDetails={handleGetDetails}/>


    </div>
  );
}

export default App;
