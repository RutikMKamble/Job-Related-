import React from 'react'
import { Link } from 'react-router-dom'

export const AdminPanel = () => {
    return (
        <> 
            <div className='mt-4 mb-4 text-center'>
                <Link to='/uploadJobData'>
                    <button type="button" class="btn btn-primary btn-lg m-1">Upload Job Data</button>
                </Link>
                <Link to='/uploadAdmitCardData'>
                    <button type="button" class="btn btn-primary btn-lg m-1">Upload Admit Card Data</button>
                </Link>
                <Link to='/uploadResultData'>
                    <button type="button" class="btn btn-primary btn-lg m-1 ">Upload Exam Result Data</button>
                </Link>
            </div>
        </>
    )
}
