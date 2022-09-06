import React, { useState, useEffect } from 'react'
import ListAllOwners from './components/ListAllOwners'
import Header from './components/Header'
import {apiGet, apiDelete, apiPost, apiPut} from './dataHandler'
import 'bootstrap/dist/css/bootstrap.min.css';
import OwnerDetails from './components/OwnerDetails';
import AddNewUser from './components/AddNewUser';

import NavigationBar from "./components/NavigationBar";

import NotFound from './components/NotFound';
import Home from './components/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


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
    apiPut("http://localhost:8080/owners/update/"+ ownerId, newUser).then(getOwner()).then(getOwners())

  }


  useEffect(() => {
    getOwners()
    console.log("use effect")
  }, [])


  return (
    <div className='container'>
        <Header />
        <NavigationBar />

        <ListAllOwners owners={owners} 
          handleDelete={handleDelete} 
          handleGetDetails={handleGetDetails}/>

        <BrowserRouter>

          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/owners">
                <Route index element={<ListAllOwners owners={owners} 
                    handleDelete={handleDelete} 
                    handleGetDetails={handleGetDetails}/>} />
                <Route path=":id" element={<OwnerDetails owner={owner} 
                    handleCloseDetails={handleCloseDetails} 
                    handleUpdateUser={handelUpdateUser}/>} />
                <Route path="add" element={<AddNewUser handelAddNewUser={handelAddNewUser}/> } />
            </Route>

            {/* <Route path="pets/:ownerId" element={<AllPetsOfOwner/>} />
            <Route path="pets/add/:ownerId" element={<AllPetsOfOwner/>} />
            <Route path="pet/:petId" element={<PetDetails/>} />

            <Route path="visit/:visitId" element={<VisitDetails/>} />
            <Route path="visit/add" element={<AddNewVisit/>} /> */}



          </Routes>

        </BrowserRouter>
        
      <hr />
      
    </div>
  );
}

export default App;
