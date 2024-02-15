import axios from "axios";
import { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import { Link , useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import Footer1 from "../../components/footer/Footer";
import Homeheader from "../../components/navbar/Homeheader";
import TransparentNavbar from "../../components/navbar/Navbar";

const Login = () => {
  const backgroundImg = '/assets/img//bg/inrbnr.webp'; 
  const pageTitle = 'Login'; 
  const pageSubheading = 'Discover the exciting adventures that await you.'; 

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <>
    <TransparentNavbar />
{/* <Homeheader /> */}
      <Breadcrumb backgroundImg={backgroundImg}
       title={pageTitle} 
       subheading={pageSubheading}
        />
    <section className="login-page">
    <div className="container">
      <div className="row">
      <div className="col-xxl-12 col-lg-12 col-md-12 col-12">
         <div className="login-form">
         <form onSubmit={handleSubmit}>
         <h3 className="Welcome-login">Login</h3>
         <div className="row">
           <div className="col-xxl-6 col-lg-6 col-md-6 col-12" id="left-form">
           <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
             />
           </div>
           <div className="col-xxl-6 col-lg-6 col-md-6 col-12" id="left-form">
           <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
              />
           </div>
           <div className="col-xxl-12 col-lg-12 col-md-12 col-12" id="left-form">
             {/* <p className="agree">I agree to all the <span><a href="/">Terms</a></span> and <span><a href="/">Privacy Policies</a></span></p> */}
           <button disabled={loading} className="register-btn">
          Login
        </button>
        {error && <p className="login-error">{error.message}</p>}
          </div>
           <div className="col-xxl-12 col-lg-12 col-md-12 col-12" id="left-form">
           <p className="agree">Don't have an account? <span><a href="/Register">Sign Up</a></span> <span className="password01"><a href="/forgot-password"> Forgot Password?</a></span></p>
         
           </div>
         </div>
         </form>
         </div>
         </div>
      </div>
    </div>
    </section>
    <Footer1 />
    </>
  );
};

export default Login;
