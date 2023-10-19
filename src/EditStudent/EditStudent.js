import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Store from "../Store/Store";

const EditStudent = () => {
  const Received = useContext(Store);
  const param = useParams().id;
  const navigate = useNavigate();

  const updateObject = {
    name: Received.value[param].name,
    age: Received.value[param].age,
    course: Received.value[param].course,
    batch: Received.value[param].batch,
  };

  const handleChange = (e) => {
    updateObject[e.target.name] = e.target.value;
  };

  const handleSubmit = () => {
    Received.value[param] = updateObject;
    navigate("/student");
  };

  return (
    <>
      <form >
        <div className="editContainer">
        <h1 className="editHeading">Edit Component</h1>
        <label>Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
        
        <label>Age</label>
        <input type="number" name="age" id="age" onChange={handleChange} />
    
        <label >Course</label>
        <input type="text" name="course" id="course" onChange={handleChange} />
        
        <label htmlFor="batch">Batch</label>
        <input type="text" name="batch" id="batch" onChange={handleChange}/>
        
        <div className="btnContainer">
          <button type="button" onClick={handleSubmit}>Update</button>
          <button type="button" onClick={() => navigate("/student")}>Back</button>
        </div>
        </div>
      </form>
    </>
  );
};

export default EditStudent;