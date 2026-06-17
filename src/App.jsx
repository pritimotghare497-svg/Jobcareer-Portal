import PostJob from "./components/PostJob";
import Services from "./components/Services";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import JobList from "./components/JobList";
import Login from "./components/Login";
import JobDetails from "./components/JobDetails";
 

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">

      <Navbar />

     
     

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/services" element={<Services />} />
          <Route path="/post-job" element={<PostJob />} />

          {/* 404 PAGE */}
          <Route
            path="*"
            element={
              <h2 style={{ textAlign: "center", marginTop: "50px" }}>
                404 - Page Not Found
              </h2>
            }
          />
        </Routes>

        <Footer />
      </div>

    </div>
  );
}

export default App;