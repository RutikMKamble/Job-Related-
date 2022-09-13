import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UploadAdmitCard = () => {

    const navigate = useNavigate();

    const [companyNameTitle, setCompanyNameTitle] = useState('')
    const [examName, setExamName] = useState("");
    const [examCity, setExamCity] = useState();
    const [admitCartDate, setAdmitCardDate] = useState();
    const [examDate, setExamDate] = useState();
    const [downloadAdmitCard, setDownloadAdmitCard] = useState();
    const [admitCartStatus, setAdmitCartStatus] = useState('')



    const submitHandler = (e) => {
        e.preventDefault();

        const dataObj = {
            companyNameTitle: companyNameTitle,
            examName: examName,
            examCity: examCity,
            admitCartDate: new Date(admitCartDate),
            examDate: new Date(examDate),
            admitCartStatus: admitCartStatus,
            downloadAdmitCard: downloadAdmitCard
        }

        axios.post('http://localhost:5046/admitCard', dataObj)
        alert("Data Save Successfully.....");

        navigate('/adminPanel')
    }
    return (
        <>
            <div className='margin-two'>
                <div>
                    <h2 class=" mb-5 mt-5">Upload Admit Card Data</h2>
                </div>
                <form onSubmit={submitHandler}>
                    
                    <label >Enter Company name</label>
                    <input type="text" class="form-control m-3" required onChange={(e) => setCompanyNameTitle(e.target.value)} />

                    <label >Enter Exam name</label>
                    <input type="text" class="form-control m-3" required onChange={(e) => setExamName(e.target.value)} />

                    <label>Enter Exam City</label>
                    <input type='text' class="form-control m-3" required onChange={(e) => setExamCity(e.target.value)} />

                    <label>Select Admit Card Date</label>
                    <input type="date" class="form-control m-3" required onChange={(e) => setAdmitCardDate(e.target.value)} />

                    <label >Select Exam Date name</label>
                    <input type="date" class="form-control m-3" required onChange={(e) => setExamDate(e.target.value)} />

                    <label >Enter Admit Card Status</label>
                    <input type="text" class="form-control m-3" required onChange={(e) => setAdmitCartStatus(e.target.value)} />

                    <label >Enter Admit Card Download Link</label>
                    <input type="text" class="form-control m-3" required onChange={(e) => setDownloadAdmitCard(e.target.value)} />

                    <input type="submit" value="Sumbit" class="btn btn-primary btn-lg m-1" />
                    <input type="reset" value='Reset' class="btn btn-primary btn-lg m-1" />

                </form>
            </div>
        </>
    )
}

export default UploadAdmitCard