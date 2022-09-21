import React, {useState} from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AddNewVisit = () => {

    const treatmentType = [" CONSULTATION", "EMERGENCY_CARE", "VACCINATION",
                            "DENTAL_TREATMENT", "LABORATORY_SERVICES",
                            "SKIN_CARE", "SURGERY"]

    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();                        
    let { petId } = useParams();
    const [visitType, setVisitType] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    let newVisit = {"treatmentType": "CONSULTATION", "description": "consultation", "price": "10000"}

    const addNewVisit = () => {
        console.log("petId"+petId)
        newVisit.treatmentType = visitType;
        newVisit.description = description;
        newVisit.price = price;
        handleAddNewVisit(newVisit, petId);

    }

    const handleAddNewVisit = async (newVisit, petId) => {
        //apiPost("http://localhost:8080/visits/add/"+ petId, newVisit).then(navigate(-1))
        const response = await axiosPrivate.post('/visits/add/'+ petId, newVisit);
        navigate(-1);
    }

    return (
        <div className='flexcontainer'>
            <div>

                <br/>
                <h1>Add new Visit: </h1><br/>

                <form onSubmit={(e) =>{e.preventDefault(); addNewVisit()}} className="form">

                    <label for="type">Choose a treatment type:</label><br/>
                    <select id="type" name="type" required onChange={(e) => {
                        setVisitType(e.target.value)}}>
                        <option key="1" value="" disabled selected>Select your option</option>
                        {treatmentType.map(visitType =>
                            <option key={visitType} value={visitType}>{visitType}</option>)};
                    </select>
                    <br/>

                    <label>Description: </label><br />
                    <input type="text" required value={description} onChange={(e) => {setDescription(e.target.value)}}  /><br />

                    <label>Price: </label><br />
                    <input type="text" required value={price} onChange={(e) => {setPrice(e.target.value)}}  /><br />
                    <br /><br />

                    <input type="submit" value="Add New Visit" />
                </form>
            </div>

        </div>
    )
}

export default AddNewVisit;