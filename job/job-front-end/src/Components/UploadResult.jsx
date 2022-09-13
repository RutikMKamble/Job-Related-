import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UploadAdmitCard = () => {
    
  const navigate = useNavigate('');

  const [companyNameTitle, setCompanyNameTitle] = useState("");
  const [examName, setExamName] = useState('');
  const [postName, setPostName] = useState('');
  const [examCity, setExamCity] = useState('');
  const [resultDate, setResultDate] = useState('');
  const [examDate, setExamDate] = useState('');
  const [resultStatus, setResultStatus] = useState('')
  const [checkResult, setCheckResult] = useState('')



  const submitHandler = (e) => {
    e.preventDefault();

    const dataObj = {
      companyNameTitle: companyNameTitle,
      examName: examName,
      postName: postName,
      examCity: examCity,
      resultDate: new Date(resultDate),
      examDate: new Date(examDate),
      resultStatus: resultStatus,
      checkResult: checkResult
    }
    axios.post('http://localhost:5046/examResult', dataObj)
    alert("Data Save Successfully.....");
    navigate('/adminPanel')
  }
  return (
    <>
      <div className='margin-two'>
        <div>
          <h2 class=" mb-5 mt-5">Upload Result Data</h2>
        </div>
        <form onSubmit={submitHandler}>
          <label >Enter Company name</label>
          <input type="text" class="form-control m-3" required onChange={(e) => setCompanyNameTitle(e.target.value)} />

          <label >Enter Exam name</label>
          <input type="text" class="form-control m-3" required onChange={(e) => setExamName(e.target.value)} />

          <label>Enter Post Name</label>
          <input type='text' class="form-control m-3" required  onChange={(e) => setPostName(e.target.value)} />

          <label>Enter City Name</label>
          <input type='text' class="form-control m-3" required  onChange={(e) => setExamCity(e.target.value)} />

          <label>Select Result Date </label>
          <input type="date" class="form-control m-3" required onChange={(e) => setResultDate(e.target.value)} />

          <label >Select Exam Date</label>
          <input type="date" class="form-control m-3" required onChange={(e) => setExamDate(e.target.value)} />

          <label >Enter Result Status</label>
          <input type="text" class="form-control m-3" required onChange={(e) => setResultStatus(e.target.value)} />

          <label >Enter Result Link</label>
          <input type="text" class="form-control m-3" required onChange={(e) => setCheckResult(e.target.value)} />

          <input type="submit" value="Sumbit" class="btn btn-primary btn-lg m-1" />
          <input type="reset" value='Reset' class="btn btn-primary btn-lg m-2" />

        </form>
      </div>
    </>
  )
}

export default UploadAdmitCard