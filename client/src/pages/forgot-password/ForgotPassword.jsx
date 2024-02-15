import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import { useContext, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Footer1 from "../../components/footer/Footer";
import "./ForgotPassword.css";
import Homeheader from "../../components/navbar/Homeheader";
import TransparentNavbar from "../../components/navbar/Navbar";

const ForgotPassword = () => {
  const backgroundImg = '/assets/img//bg/inrbnr.webp'; 
  const pageTitle = 'Forgot Password'; 
  const pageSubheading = 'Discover the exciting adventures that await you.'; 
  const [credentials, setCredentials] = useState({
    email: "",
  });
  axios.defaults.withCredentials = true;
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/users/forgot-password", credentials);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <>
    <TransparentNavbar />
    {/* <Homeheader /> */}
{/* <Navbar /> */}
      <Breadcrumb backgroundImg={backgroundImg}
       title={pageTitle} 
       subheading={pageSubheading}
        />
  
    <section className="login-page">
    <div className="container">
      <div className="row text-center">
      <div className="col-xxl-12 col-lg-12 col-md-12 col-12">
      <div className="login-form">
         <h3 className="Welcome-login">Forgot Password</h3>
            <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            className="rInput1"
            onChange={handleChange}
          />
            <button disabled={loading} onClick={handleClick} className="register-btn">
          {loading ? "Sending.. Reset password link sent on your email" : "Send"}
        </button>
        {error && <span>{error.message}</span>}
           </div>
           </div>
           </div>
      </div>
     
      </section>
  
    <Footer1 />
    </>
  );
};

export default ForgotPassword;
