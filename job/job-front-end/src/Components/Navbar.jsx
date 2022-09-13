import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div class="container-fluid">
                    <a class="navbar-brand">
                    <Link to='/home'>Jobs.Com</Link>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page">
                                    <Link to='/home'>Home</Link>
                                    </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" >
                                    <Link to='/admitCard'>
                                        Admit Card
                                    </Link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" >
                                    <Link to='/examResult'>
                                    Exam Result
                                    </Link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" >
                                    <Link to='/about'>
                                        About
                                    </Link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" >
                                    <Link to='/adminPanel'>
                                        Admin Panel
                                    </Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar