import React, { useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { registeredSuccess } from "../../features/userSlicer";
import { Link, useNavigate } from "react-router-dom";
import './registerstyle.scss';
import {useMutation} from '@tanstack/react-query'

const RegisterUser = () => { 
  const navigate  = useNavigate();
  const dispatch = useDispatch();    
  const [values, setValues] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const handleValues = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    });
  };

  const { username, lastname, email, password, phone, address } = values;
  const registerMutate = useMutation({
    mutationFn: async (values)=>{
      const res = await axios.post('https://bashtotalsportbackend.onrender.com/api/v1/home/user/register',values)
      dispatch(registeredSuccess(res.data))
      return res.data
    },
    onSuccess:()=>{
      alert('user created')
      setTimeout(()=>{
        navigate('/')
      },500)
    },
    onError:(error)=>{
      alert('failed to register the user')
      console.log(error)
    }
  })
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!username || !lastname || !email || !password || !phone || !address) {
        alert('All fields are required');
        return;
    }
    registerMutate.mutate(values)
  }
  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleValues}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={handleValues}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleValues}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleValues}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleValues}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleValues}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/loginuser" id="login">Login</Link>
    </div>
  );
};

export default RegisterUser;
