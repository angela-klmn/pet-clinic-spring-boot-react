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
import PersistLogin from './components/PersistLogin';
import Logout from './components/Login/Logout';
import useAxiosPrivate from "./hooks/useAxiosPrivate";


function App() {
  console.log("RELOADING????")
  const axiosPrivate = useAxiosPrivate();

  const ROLES = {
    'Client': "ROLE_CLIENT",
    'Employee': "ROLE_EMPLOYEE",

  }
  const { auth } = useAuth();

  let navigate = useNavigate();

  const [owners, fetchOwners] = useState([])
  const [searchedOwner, fetchSearchedOwner] = useState([])

  const getOwners = () => {
    apiGet('http://localhost:8080/owners').then(result => fetchOwners(result))
  }

  // const handleDelete = (ownerId) => {
  //   //apiDelete('http://localhost:8080/owners/' + ownerId).then(getOwners).then(navigate("/owners"));
  //   axiosPrivate.delete('/owners/' + ownerId).then(navigate("/owners"));
  // }

//   const getOwners = async () => {
//     try {
//       console.log("in begining of try block")
//         const response = await axiosPrivate.get('/owners', {
//             //signal: controller.signal
//         });
//         console.log("response.data: ");
//         console.log(response.data);
//         isMounted && setOwners(response.data);
//     } catch (err) {
//         console.error(err);
//         navigate('/login', { state: { from: location }, replace: true });
//     }
// }

  const handleDeleteVisit = (visitId) => {
    apiDelete('http://localhost:8080/visits/delete/' + visitId).then(navigate(0))
  }

  const handleDeletePet = (petId) => {
    apiDelete('http://localhost:8080/pets/' + petId).then(getOwners).then(navigate(-1));
  }

// const handelAddNewUser = (newUser) => {
//   apiPost("http://localhost:8080/owners/add", newUser).then(getOwners).then(navigate("/owners"))
// }

  // const handelUpdateUser = (newUser, ownerId) => {
  //   apiPut("http://localhost:8080/owners/update/"+ ownerId, newUser)
  // }

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


//console.log("In App.js outside functions: " + auth.user)


  useEffect(() => {
    //getOwners()
    console.log("use effect")
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
            

            <Route element={<PersistLogin />}>
              {/* we want to protect these routes */}
              {/* Accessible only to EMPLOYEES */}
              <Route element={<RequireAuth allowedRoles={[ROLES.Employee]} />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/owners">
                        <Route index element={<ListAllOwners />} />
                        <Route path=":ownerId" element={<OwnerDetails  />} />
                        <Route path="add" element={<AddNewOwner /> } />
                        <Route path="search/:name" element={<ListAllOwners owners={searchedOwner}/> } />
                  </Route>

                  <Route path="pets/add/:ownerId" element={<AddNewPet handelAddNewPet={handelAddNewPet}/> } />
                  <Route path="pets/:petId" element={<PetDetails handleDeleteVisit={handleDeleteVisit} handleDeletePet={handleDeletePet}/>} />
                  <Route path="visits/add/:petId" element={<AddNewVisit handleAddNewVisit={handleAddNewVisit}/>} />

              </Route>


              {/* we want to protect these routes */}
              {/* Accessible to CLIENTS and EMPLOYEES */}
              <Route element={<RequireAuth allowedRoles={[ROLES.Employee, ROLES.Client]} />}>
                <Route path="/client/pets" element={<ClientPets />} />
                <Route path="/client/pet/:petId" element={<ClientPetDetails />} />
                
              </Route>
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
