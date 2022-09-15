import React, { useState, useEffect } from 'react'
import ListAllOwners from './components/ListAllOwners'
import Header from './components/Header'
import {apiGet, apiDelete, apiPost, apiPut} from './dataHandler'
import 'bootstrap/dist/css/bootstrap.min.css';
import OwnerDetails from './components/OwnerDetails';
import AddNewUser from './components/AddNewUser';
import AddNewPet from './components/AddNewPet';
import PetDetails from './components/PetDetails';
import NavigationBar from "./components/NavigationBar";
import NotFound from './components/NotFound';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddNewVisit from "./components/AddNewVisit";
import Login from "./components/Login/Login";


function App() {


  let navigate = useNavigate();

  const [owners, fetchOwners] = useState([])
  const [searchedOwner, fetchSearchedOwner] = useState([])

  const getOwners = () => {
    apiGet('http://localhost:8080/owners').then(result => fetchOwners(result))
  }

  const handleDelete = (ownerId) => {
    apiDelete('http://localhost:8080/owners/' + ownerId).then(getOwners).then(navigate("/owners"));
  }

  const handleDeleteVisit = (visitId) => {
    apiDelete('http://localhost:8080/visits/delete/' + visitId).then(navigate(0))
  }

  const handleDeletePet = (petId) => {
    apiDelete('http://localhost:8080/pets/' + petId).then(getOwners).then(navigate(-1));
  }

const handelAddNewUser = (newUser) => {
  apiPost("http://localhost:8080/owners/add", newUser).then(getOwners).then(navigate("/owners"))
}

  const handelUpdateUser = (newUser, ownerId) => {
    apiPut("http://localhost:8080/owners/update/"+ ownerId, newUser)
  }

  const handelAddNewPet = (newPet, ownerId) => {
    apiPost("http://localhost:8080/pets/add/"+ ownerId, newPet).then(navigate(-1).then(navigate(0)))
  }

  const handleAddNewVisit = (newVisit, petId) => {
    apiPost("http://localhost:8080/visits/add/"+ petId, newVisit).then(navigate(-1))
  }

  const searchOwnerByName = async (name) => {
    apiGet("http://localhost:8080/owners/search/" + name).then(result => fetchSearchedOwner(result))
        .then(navigate("/owners/search/"+name))
}




  useEffect(() => {
    getOwners()
    console.log("use effect")
  }, [])


  return (
    <div className='container'>
        <Header />
        <NavigationBar searchOwnerByName={searchOwnerByName} />

          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/owners">
                <Route index element={<ListAllOwners owners={owners} 
                    handleDelete={handleDelete} />} />
                <Route path=":ownerId" element={<OwnerDetails  
                    handleUpdateUser={handelUpdateUser} handleDelete={handleDelete}/>} />
                <Route path="add" element={<AddNewUser handelAddNewUser={handelAddNewUser}/> } />
                <Route path="search/:name" element={<ListAllOwners owners={searchedOwner}
                                                                        handleDelete={handleDelete}/> } />

            </Route>
            <Route path="pets/add/:ownerId" element={<AddNewPet handelAddNewPet={handelAddNewPet}/> } />

            <Route path="pets/:petId" element={<PetDetails handleDeleteVisit={handleDeleteVisit} handleDeletePet={handleDeletePet}/>} />
            <Route path="visits/add/:petId" element={<AddNewVisit handleAddNewVisit={handleAddNewVisit}/>} />


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
