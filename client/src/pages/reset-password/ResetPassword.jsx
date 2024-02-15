import React from 'react'
import { useState , useContext   } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext";


function ResetPassword() {
  const [newPassword, setPassword] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);

  function validPassword(newPassword) {
    let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    return (typeof (newPassword) != "string" || regex.test(newPassword)) ? true : false
  }

  const handleClick = (e) => {
      e.preventDefault();

      if (!validPassword(newPassword)) { return alert("Please enter valid Password that must contain 8 char with upercase, lowercase, special char and number!") }
      // Add a check for a valid newPassword before submitting
    //   if (validPassword(newPassword)) { return alert("Password Submit Success") }
        // alert("Form Submitted Successfully")
      if (!newPassword) {
          // Handle error, e.g., display a message to the user
          console.error('Please enter a new password.');
          return;
      }
      try {
      // Send the reset request with the new password
      const res = axios.put(`/users/reset-password/${id}`, { newPassword })
          .then((res) => {
              if (res.data.Status === 'Success') {
                  // Redirect to login page after successful password reset
                  window.location.href = '/';
                  console.log('Reset Password');
                }
          })
          .catch((err) => console.log(err));
        } catch (err) {
            dispatch({ type: "Reset_Passfaliure", payload: err.response.data });
    }
    setTimeout(() => {
        alert("Form Submitted Successfully");
    }, 1000);
    setTimeout(() => {
        navigate('/');
    }, 2000);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick(e);
    }
  };
  return (
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
          <div className="bg-white p-3 rounded w-25">
              <h4>Reset Password</h4>
                <form onSubmit={handleClick}>
                  <div className="mb-3">
                      <input
                          type="password"
                          placeholder="Enter New Password"
                          autoComplete="off"
                          name="password"
                          className="form-control rounded-0"
                          onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                  <button disabled={loading} onKeyDown={handleKeyDown} className="btn btn-success w-100 rounded-0">
                       {loading ? "Sending.. Reset password" : "Update"}
                  </button>
                </form>
          </div>
      </div>
  );
}

export default ResetPassword;