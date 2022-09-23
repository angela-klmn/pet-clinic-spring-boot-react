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
                <h1 className={"add-label"}>Add new Visit: </h1><br/>

                <form onSubmit={(e) =>{e.preventDefault(); addNewVisit()}} className="form">

                    <select class="textbox" id="type" name="type" required onChange={(e) => {
                        setVisitType(e.target.value)}}>
                        <option key="1" value="" disabled selected>Select visit type</option>
                        {treatmentType.map(visitType =>
                            <option key={visitType} value={visitType}>{visitType}</option>)};
                    </select><br />
                    <br/>

                    <input class="textbox" type="text" placeholder="Description" required value={description} onChange={(e) => {setDescription(e.target.value)}}  /><br /><br />

                    <input class="textbox" type="text" placeholder="Price"  required value={price} onChange={(e) => {setPrice(e.target.value)}}  /><br /><br />


                    <input type="submit" value="Add New Visit" className="button" />
                </form>
            </div>

        </div>
    )
}

export default AddNewVisit;