import React from 'react'
import axios from 'axios'
import { useParams, } from 'react-router-dom'
import { useEffect, useState } from 'react';
import moment from 'moment'


const ExamResultDetails = () => {

    const { userID } = useParams([]);
    console.log(userID);

    const [companyNameTitle, setCompanyNameTitle] = useState("");
    const [examName, setExamName] = useState('');
    const [postName, setPostName] = useState('');
    const [examCity, setExamCity] = useState('');
    const [resultDate, setResultDate] = useState('');
    const [examDate, setExamDate] = useState('');
    const [resultStatus, setResultStatus] = useState('')
    const [checkResult , setCheckResult] =  useState('')


    useEffect(() => {
        axios.get(`http://localhost:5046/examResult/${userID}`)
            .then(async (res) => {
                const rawData = await res.data[0];

                setCompanyNameTitle(rawData.companyNameTitle);
                setExamName(rawData.examName);
                setPostName(rawData.postName);
                setExamCity(rawData.examCity);
                setResultDate(rawData.setResultDate);
                setExamDate(rawData.examDate);
                setResultStatus(rawData.resultStatus);
                setCheckResult(rawData.checkResult)
            })
            .catch(err => console.log(err))
    })


    return (
        <>
            <div>
                <h2 class=" mb-5 mt-5 margin-two">Exam Result Details</h2>
            </div>
            <div class="mb-3 mt-5 row text-center justify-content-center width-full">
                <h3>{companyNameTitle}</h3>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Exam Name</label>
                    <label class="col-sm-2 col-form-label">{examName}</label>
                </div>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Post Name</label>
                    <label class="col-sm-2 col-form-label">{postName}</label>
                </div>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Exam City</label>
                    <label class="col-sm-2 col-form-label">{examCity}</label>
                </div>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Result Date</label>
                    <label class="col-sm-2 col-form-label">
                        {moment(resultDate).format("DD")}-
                        {moment(resultDate).format("MMM")}-
                        {moment(resultDate).format("YYYY")}</label>
                </div>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Exam Date</label>
                    <label class="col-sm-2 col-form-label">
                        {moment(examDate).format("DD")}-
                        {moment(examDate).format("MMM")}-
                        {moment(examDate).format("YYYY")}
                    </label>
                </div>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Result Status</label>
                    <label class="col-sm-2 col-form-label">{resultStatus}</label>
                </div>
                <div>
                    <label for="staticEmail" class="col-sm-2 col-form-label me-3">Check Result</label>
                    <label for="staticEmail" class="col-sm-2 col-form-label">{checkResult}</label>
                </div>
            </div>
        </>
    )
}

export default ExamResultDetails