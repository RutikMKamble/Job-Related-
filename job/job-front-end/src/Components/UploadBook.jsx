import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UploadBook = () => {
  const navigate = useNavigate();

  const [bookTitle, setBookTitle] = useState(false);
  const [bookDesc, setBookDesc] = useState();
  const [bookPrice, setBookPrice] = useState();


  const submitHandler = (e) => {
    e.preventDefault();

    const dataObj = {
      bookTitle: bookTitle,
      bookDesc: bookDesc,
      price: bookPrice
    }

    axios.post("http://localhost:5046/books", dataObj)
    alert("Data Save Successfully......");
    navigate('/adminPanel')
  }
  return (
    <>
      <div className='margin-two'>
        <div>
          <h2 class=" mb-5 mt-5">Upload Book Data</h2>
        </div>
        <form onSubmit={submitHandler}>
          <label >Enter Book Name</label>
          <input type="text" class="form-control m-3" required onChange={(e) => setBookTitle(e.target.value)} />

          <label >Enter Book Description</label>
          <input type="text" class="form-control m-3" required onChange={(e) => setBookDesc(e.target.value)} />

          <label>Enter Book Price </label>
          <input type='number' class="form-control m-3" required onChange={(e) => setBookPrice(e.target.value)} />

          <input type="submit" value="Sumbit" class="btn btn-primary btn-lg m-1" />
          <input type="reset" value='Reset' class="btn btn-primary btn-lg m-1" />

        </form>
      </div>
    </>
  )
}

export default UploadBook