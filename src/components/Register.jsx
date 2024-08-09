import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import toast from "react-hot-toast";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './slide.css';
import { useDispatch } from 'react-redux';
import { setToken } from "../redux/userSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    isSignUp: false
  });

  const { name, email, password, isSignUp } = formData;

  const handleFormToggle = () => {
    setFormData({ ...formData, isSignUp: !isSignUp });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // const payload = {
    //   email:"bharath@gmail.com",
    //   password:"1234"
    // }
  
    const apiUrl = isSignUp ? 'http://localhost:3000/users/signup' : 'http://localhost:3000/users/login';
    const requestData = { name, email, password };
  
    try {
      const response = await axios.post(apiUrl, requestData);
      console.log("login=>", response)
      if (isSignUp) {
        console.log(response.data.message);
        setFormData({ ...formData, isSignUp: false });
      } else {
        const { token } = response.data;
        localStorage.setItem('token', token);
        dispatch(setToken(token))
        await toast.success(`${isSignUp ? 'Signup' : 'Login'} Successfull` );
        navigate('/');
      }
    } catch (error) {
      console.error(`${isSignUp ? 'Signup' : 'Login'} failed:`, error);
      toast.error(`${isSignUp ? 'Signup' : 'Login'} failed`);
    }
  };

  return (
    <div className="body">
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} required />
            <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} required />
            <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} required />
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} required />
            <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} required />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h2>Already have an account?</h2>
              <p>Please login to access your profile.</p>
              <button className="ghost" onClick={handleFormToggle}>
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h2>Don't have an account?</h2>
              <p>Go ahead and create an account for yourself!</p>
              <button className="ghost" onClick={handleFormToggle}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Register;
