import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const AdmitCard = () => {

    const [jobData, setJobData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5046/admitCard')
            .then(async (res) => {
                const rawData = await res.data;
                console.log(rawData);
                setJobData(rawData)
            }).catch(err => console.log(err))
    }, [])




    return (
        <>
            <div className='margin-two'>
                <div>
                    <h2 class=" mb-5 mt-5">Admit Card</h2>
                </div>
                {

                    jobData.map((row) => {
                        return (
                            <>

                                <div className='grid-one'>
                                    <div className=' container p-1 my-3 '>
                                        <div className='mt-3'>
                                            <h4>{row.companyNameTitle}</h4>

                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                <button class="btn btn-primary" type="button">
                                                    <Link to={`/admitCardDetails/${row._id}`}>
                                                        Read More
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default AdmitCard
