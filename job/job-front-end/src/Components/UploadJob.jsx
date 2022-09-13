import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const UploadJob = () => {

  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [postName, setPostName] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPost, setTotalPost] = useState("");
  const [education, setEducation] = useState('');
  const [onlineApply, setOnlineApply] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();

    const dataObj = {
      companyName: companyName,
      postName: postName,
      jobDesc: jobDesc,
      jobLocation: jobLocation,
      StartDate: StartDate,
      endDate: endDate,
      totalPost: totalPost,
      education: education,
      onlineApply: onlineApply,
    }
    axios.post("http://localhost:5046/jobs", dataObj);

    alert("Data Saved...")
    navigate('/adminPanel')
  }


  return (
    <>
      <div className='margin-two'>
        <div>
          <h2 class=" mb-5 mt-5">Upload Job Data</h2>
        </div>
        <form onSubmit={submitHandler}>
          <label >Enter Company Name</label>
          <input type="text" class="form-control  m-3" required onChange={(e) => setCompanyName(e.target.value)} />

          <label >Enter Post Name</label>
          <input type="text" class="form-control m-3" required onChange={(e) => setPostName(e.target.value)} />

          <label>Enter Job Description </label>
          <input type='text' class="form-control m-3" required onChange={(e) => setJobDesc(e.target.value)} />

          <label>Enter Job Location</label>
          <input type='text' class="form-control m-3" required onChange={(e) => setJobLocation(e.target.value)} />

          <label>Select Start Date </label>
          <input type="date" class="form-control m-3 " required onChange={(e) => setStartDate(e.target.value)} />

          <label >Select End Date</label>
          <input type="date" class="form-control m-3" required onChange={(e) => setEndDate(e.target.value)} />

          <label >Enter Total Post</label>
          <input type="text" class="form-control m-3" required onChange={(e) => setTotalPost(e.target.value)} />

          <label >Enter Education </label>
          <input type="text" class="form-control m-3" required onChange={(e) => setEducation(e.target.value)} />

          <label >Enter Apply Link </label>
          <input type="text" class="form-control m-3" required onChange={(e) => setOnlineApply(e.target.value)} />

          <input type="submit" value="Sumbit" class="btn btn-primary btn-lg m-1" />
          <input type="reset" value='Reset' class="btn btn-primary btn-lg m-1" />
        </form>
      </div>

    </>
  )
}

export default UploadJob