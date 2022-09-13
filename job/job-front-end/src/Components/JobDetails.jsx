import React from 'react'
import axios from 'axios'
import { useParams, } from 'react-router-dom'
import { useEffect, useState } from 'react';
import moment from 'moment'


const JobDetails = () => {

    const { userID } = useParams([]);
    console.log(userID);

    const [companyName, setCompanyName] = useState("");
    const [postName, setPostName] = useState("");
    const [jobDesc, setJobDesc] = useState("");
    const [jobLocation, setJobLocation] = useState("");
    const [StartDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [totalPost, setTotalPost] = useState("");
    const [education, setEducation] = useState('');
    const [onlineApply, setOnlineApply] = useState("");


    useEffect(() => {
        axios.get(`http://localhost:5046/jobs/${userID}`)
            .then(async (res) => {
                const rawData = await res.data[0];

                setCompanyName(rawData.companyName);
                setPostName(rawData.postName);
                setJobDesc(rawData.jobDesc)
                setJobLocation(rawData.jobLocation)
                setStartDate(rawData.StartDate)
                setEndDate(rawData.endDate)
                setTotalPost(rawData.postName)
                setEducation(rawData.education)
                setOnlineApply(rawData.onlineApply)
            })
            .catch(err => console.log(err))
    })


    return (
        <>
            <div class="mb-3 mt-5 row text-center justify-content-center width-full">
                <h3>{companyName}</h3>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Post Name</label>
                    <label class="col-sm-2 col-form-label">{postName}</label>
                </div>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Job Location</label>
                    <label class="col-sm-2 col-form-label">{jobLocation}</label>
                </div>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Start Date</label>
                    <label class="col-sm-2 col-form-label">
                        {moment(StartDate).format("DD")}-
                        {moment(StartDate).format("MMM")}-
                        {moment(StartDate).format("YYYY")}</label>
                </div>
                <div>
                    <label class="col-sm-2 col-form-label me-3">End Date</label>
                    <label class="col-sm-2 col-form-label">
                        {moment(endDate).format("DD")}-
                        {moment(endDate).format("MMM")}-
                        {moment(endDate).format("YYYY")}
                    </label>
                </div>
                <div>
                    <label class="col-sm-2 col-form-label me-3">Total Posts</label>
                    <label class="col-sm-2 col-form-label">{totalPost}</label>
                </div>
                <div>
                    <label for="staticEmail" class="col-sm-2 col-form-label me-3">Education Qualification </label>
                    <label for="staticEmail" class="col-sm-2 col-form-label">{education}</label>
                </div>
                <div>
                    <label for="staticEmail" class="col-sm-2 col-form-label me-3">Online Apply</label>
                    <label for="staticEmail" class="col-sm-2 col-form-label">{onlineApply}</label>
                </div>
            </div>
        </>
    )
}

export default JobDetails