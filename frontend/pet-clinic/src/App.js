
import React, { useState, useEffect } from 'react'
import ListAllOwners from './components/ListAllOwners'


function App() {

  const [owners, fetchOwners] = useState([])

  const getData = () => {
    fetch('http://localhost:8080/owners')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchOwners(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
    
        
        <h1>Header</h1>
        <ListAllOwners owners={owners}/>

  
    </div>
  );
}

export default App;
