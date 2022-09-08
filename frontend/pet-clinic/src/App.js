import React, { useState, useEffect } from 'react'
import ListAllOwners from './components/ListAllOwners'
import Header from './components/Header'
import {apiGet, apiDelete, apiPost, apiPut} from './dataHandler'
import 'bootstrap/dist/css/bootstrap.min.css';
import OwnerDetails from './components/OwnerDetails';
import AddNewUser from './components/AddNewUser';
import AddNewPet from './components/AddNewPet';

import NavigationBar from "./components/NavigationBar";

import NotFound from './components/NotFound';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {

  let navigate = useNavigate();

  const [owners, fetchOwners] = useState([])

  const getOwners = () => {
    apiGet('http://localhost:8080/owners').then(result => fetchOwners(result))
  }

  const handleDelete = (ownerId) => {
    apiDelete('http://localhost:8080/owners/' + ownerId).then(getOwners).then(navigate("/owners"));
  }

const handelAddNewUser = (newUser) => {
  apiPost("http://localhost:8080/owners/add", newUser).then(getOwners).then(navigate("/owners"))
}

  const handelUpdateUser = (newUser, ownerId) => {
    apiPut("http://localhost:8080/owners/update/"+ ownerId, newUser)
  }

  const handelAddNewPet = (newPet, ownerId) => {
    apiPost("http://localhost:8080/pets/add/"+ ownerId, newPet).then(navigate("/owners/"+ownerId))
  }


  useEffect(() => {
    getOwners()
    console.log("use effect")
  }, [])


  return (
    <div className='container'>
        <Header />
        <NavigationBar /> 

          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/owners">
                <Route index element={<ListAllOwners owners={owners} 
                    handleDelete={handleDelete} />} />
                <Route path=":ownerId" element={<OwnerDetails  
                    handleUpdateUser={handelUpdateUser}/>} />
                <Route path="add" element={<AddNewUser handelAddNewUser={handelAddNewUser}/> } />
                
            </Route>
            <Route path="pets/add/:ownerId" element={<AddNewPet handelAddNewPet={handelAddNewPet}/> } />

            {/* <Route path="pets/:ownerId" element={<AllPetsOfOwner/>} />
            <Route path="pets/add/:ownerId" element={<AllPetsOfOwner/>} />
            <Route path="pet/:petId" element={<PetDetails/>} />

            <Route path="visit/:visitId" element={<VisitDetails/>} />
            <Route path="visit/add" element={<AddNewVisit/>} /> */}

          </Routes>
 
      <hr />
      <Footer />
      
    </div>
  );
}

export default App;
