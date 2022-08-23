import React, { useState, useEffect } from 'react'
import ListAllOwners from './components/ListAllOwners'
import { apiGet } from './dataHandler'


function App() {

  const [owners, fetchOwners] = useState([])
  const [owner, fetchOwner] = useState([])

  const getOwners = () => {
    apiGet('http://localhost:8080/owners').then(result => fetchOwners(result))
  }

  const getOwner = () => {
    apiGet('http://localhost:8080/owner/1').then(result => fetchOwner(result))
  }

  useEffect(() => {
    getOwners()
  }, [])


  return (
    <div className="App">


        <h1>Header</h1>
        <ListAllOwners owners={owners}/>


    </div>
  );
}

export default App;
