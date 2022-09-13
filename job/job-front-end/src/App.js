import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import './Common.css'
import Footer from "./Components/Footer";
import Details from "./Components/JobDetails";
import About from "./Pages/About";
import ExamResult from "./Pages/ExamResult";
import AdmitCard from "./Pages/AdmitCard";
import AdmitCardDetails from "./Components/AdmitCardDetails";
import ExamResultDetails from "./Components/ExamResultDetails";
import { AdminPanel } from "./Pages/AdminPanel";
import UploadJob from './Components/UploadJob';
import UploadAdmitCard from './Components/UploadAdmitCard';
import UploadResult from './Components/UploadResult'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/jobDetails/:userID' element={<Details></Details>}></Route>
          <Route path='/admitCard' element={<AdmitCard></AdmitCard>}></Route>
          <Route path='/admitCardDetails/:userID' element={<AdmitCardDetails></AdmitCardDetails>}></Route>
          <Route path='/examResult' element={<ExamResult></ExamResult>}></Route>
          <Route path='/ExamResultDetails/:userID' element={<ExamResultDetails></ExamResultDetails>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/adminPanel" element={<AdminPanel></AdminPanel>}></Route>
          <Route path='/uploadJobData' element={<UploadJob></UploadJob>}></Route>
          <Route path='/uploadAdmitCardData' element={<UploadAdmitCard></UploadAdmitCard>}></Route>
          <Route path='/uploadResultData' element={<UploadResult></UploadResult>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
