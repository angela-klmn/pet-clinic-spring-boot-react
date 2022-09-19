import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const ListAllOwners = () => {

  const [owners, setOwners] = useState([]);
  const [deletedAClient, setDeletedAClient] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDelete = async (ownerId) => {
    //apiDelete('http://localhost:8080/owners/' + ownerId).then(getOwners).then(navigate("/owners"));
    console.log("before: " + deletedAClient)
    const response = await axiosPrivate.delete('/owners/' + ownerId);
    deletedAClient ? setDeletedAClient(false) : setDeletedAClient(true);
    console.log("after: " + deletedAClient)
  }

  useEffect(() => {
      let isMounted = true;
      //const controller = new AbortController();

      const getOwners = async () => {
          try {
            console.log("in beginning of try block")
              const response = await axiosPrivate.get('/owners', {
                  //signal: controller.signal
              });
              console.log("response.data: ");
              console.log(response.data);
              isMounted && setOwners(response.data);
          } catch (err) {
              console.error(err);
              navigate('/login', { state: { from: location }, replace: true });
          }
      }

      getOwners();

      return () => {
          isMounted = false;
          //controller.abort();
      }
  }, [deletedAClient])

  return (
    <div>
      <hr />
      <br />
   

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>e-mail</th>
          <th>Details</th>
          <th>Delete</th>
        </tr>
       </thead>
       <tbody>
        {owners.map((owner, key) => {
          return (
            <tr key={key}>
              <td>{owner.firstName}  {owner.lastName}</td>
              <td>{owner.email}</td>
              <td>
                <Link to={`/owners/${owner.id}`}><button className="btn btn-outline-secondary">Details</button> </Link>
              </td>
              <td><button className="btn btn-outline-secondary" onClick={() => handleDelete(owner.id)}>Delete</button>  </td>
            </tr>
          )
        })}
        </tbody>
      </Table>
    

    </div>
  )
}

export default ListAllOwners
