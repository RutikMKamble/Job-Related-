import React from 'react'
import axios from 'axios'
import { useParams, } from 'react-router-dom'
import { useEffect, useState } from 'react';
import moment from 'moment'


const AdmitCardDetails = () => {

    const { userID } = useParams([]);
    console.log(userID);

    const [companyNameTitle, setCompanyNameTitle] = useState("");
    const [examName, setExamName] = useState("");
    const [examCity, setExamCity] = useState();
    const [admitCartDate, setAdmitCardDate] = useState();
    const [examDate, setExamDate] = useState();
    const [downloadAdmitCard, setDownloadAdmitCard] = useState();
    const [admitCartStatus, setAdmitCartStatus] = useState('')


    useEffect(() => {
        axios.get(`http://localhost:5046/admitCard/${userID}`)
            .then(async (res) => {
                const rawData = await res.data[0];

                setCompanyNameTitle(rawData.companyNameTitle);
                setExamName(rawData.examName);
                setExamCity(rawData.examCity);
                setAdmitCardDate(rawData.admitCartDate);
                setExamDate(rawData.examDate);
                setDownloadAdmitCard(rawData.downloadAdmitCard)
                setAdmitCartStatus(rawData.admitCartStatus)
            })
            .catch(err => console.log(err))
    })


    return (
        <>
            <div>
                <h2 class=" mb-5 mt-5 margin-two ">Admit Card Details</h2>
            </div>
            <div class="mb-3 mt-5 row text-center justify-content-center width-full">
                <h3>{companyNameTitle}</h3>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Exam Name</label>
                    <label class="col-sm-2 col-form-label">{examName}</label>
                </div>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Exam City</label>
                    <label class="col-sm-2 col-form-label">{examCity}</label>
                </div>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Admit Card Date</label>
                    <label class="col-sm-2 col-form-label">
                        {moment(admitCartDate).format("DD")}-
                        {moment(admitCartDate).format("MMM")}-
                        {moment(admitCartDate).format("YYYY")}</label>
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
                    <label class="col-sm-2 col-form-label me-3">Admit Card Status</label>
                    <label class="col-sm-2 col-form-label">{admitCartStatus}</label>
                </div>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Download Admit Card</label>
                    <label class="col-sm-2 col-form-label">{downloadAdmitCard}</label>
                </div>
            </div>
        </>
    )
}

export default AdmitCardDetails