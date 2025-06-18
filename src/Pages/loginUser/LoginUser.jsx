import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from '../../features/userSlicer';
import axios from 'axios';
import {useMutation} from '@tanstack/react-query'
import {useNavigate} from 'react-router-dom'

const LoginUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const { email, password } = values;
  const loginMutate = useMutation({
    mutationFn:async ()=>{
      const res = await axios.post('https://bashtotalsportbackend.onrender.com/api/v1/home/user/login',values)
      const { token, ...user } = res.data;
      dispatch(loginUser({ user, token })); // Dispatch user and token to Redux
      localStorage.setItem('authToken', token); // Save the token to localStorage
      // console.log(res.data); // Optional: Log the response
      return res.data
    },
    onSuccess:()=>{
      setTimeout(()=>{
        navigate('/')
      })
    },
    onError:(er)=>{
      console.log(er)
    }
  })
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!email || !password){
      alert('All fields required')
    }
    loginMutate.mutate(values)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginUser;
