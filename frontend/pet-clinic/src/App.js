import React, { useState, useEffect } from 'react'
import ListAllOwners from './components/owner/ListAllOwners'
import Header from './components/Header'
import {apiGet, apiDelete, apiPost, apiPut} from './dataHandler'
import 'bootstrap/dist/css/bootstrap.min.css';
import OwnerDetails from './components/owner/OwnerDetails';
import AddNewOwner from './components/owner/AddNewOwner';
import AddNewPet from './components/pet/AddNewPet';
import PetDetails from './components/pet/PetDetails';
import NavigationBar from "./components/NavigationBar";
import NotFound from './components/NotFound';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddNewVisit from "./components/visit/AddNewVisit";
import Login from "./components/Login/Login";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from './components/RequireAuth';
import ClientPets from './components/forclients/ClientPets';
import ClientPetDetails from './components/forclients/ClientPetDetails';
import Users from './components/Users';
import useAuth from './hooks/useAuth';
import Logout from './components/Login/Logout';
import useAxiosPrivate from "./hooks/useAxiosPrivate";
import ListSearchedOwners from "./components/owner/ListSearchedOwners"


function App() {
  
  const ROLES = {
    'Client': "ROLE_CLIENT",
    'Employee': "ROLE_EMPLOYEE",
  }

  const { auth } = useAuth();
  let navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const [searchedOwners, fetchSearchedOwner] = useState([])


  const searchOwnerByName = async (name) => {
    const response = await axiosPrivate.get("/owners/search/"+name, {});
    fetchSearchedOwner(response.data);
    console.log("In searchbyname, searchedowners : ", searchedOwners)
    navigate("/owners/search/"+name);
}


  useEffect(() => {
    console.log("use effect in App.js")
  }, [])


  return (
    <div className='container'>
        
        {auth.user!=null &&
            <Header />
        }

        {(auth.roles==ROLES.Employee) &&
            <NavigationBar searchOwnerByName={searchOwnerByName} />
        }
        
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/users" element={<Users />} />
            <Route path="/logout" element={<Logout />} />
            
          
              {/* we want to protect these routes */}
              {/* Accessible only to EMPLOYEES */}
              <Route element={<RequireAuth allowedRoles={[ROLES.Employee]} />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/owners">
                        <Route index element={<ListAllOwners />} />
                        <Route path=":ownerId" element={<OwnerDetails  />} />
                        <Route path="add" element={<AddNewOwner /> } />
                        <Route path="search/:name" element={<ListSearchedOwners searchedOwners={searchedOwners}/> } />
                  </Route>

                  <Route path="pets/add/:ownerId" element={<AddNewPet /> } />
                  <Route path="pets/:petId" element={<PetDetails />} />
                  <Route path="visits/add/:petId" element={<AddNewVisit />} />

              </Route>


              {/* we want to protect these routes */}
              {/* Accessible to CLIENTS and EMPLOYEES */}
              <Route element={<RequireAuth allowedRoles={[ROLES.Employee, ROLES.Client]} />}>
                <Route path="/client/pets" element={<ClientPets />} />
                <Route path="/client/pet/:petId" element={<ClientPetDetails />} />
                
              </Route>
       
          </Routes>
 
      <hr />
      {auth.user!=null &&
            <Footer />
        }
   
    </div>
  );
}

export default App;
