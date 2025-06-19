import React, { useState } from 'react';
import './style.scss';
import totalsport from '../../../images/totalsports.png';
import searchicon from '../../assets/svg/searchblackline.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchingProducts } from '../../features/searchSlice';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';


const Search = () => {
  const [search,setSearch] = useState('')
  const naviagate = useNavigate()
  const dispatch = useDispatch()
  const searchMutate = useMutation({
    mutationKey:['search product'],
    mutationFn:async(search)=>{
      const response = await axios.post('https://bashtotalsportbackend.onrender.com/api/v1/home/allproduct/search',{
        search:search
      })
   
      return response.data
    },
    onSuccess:(data)=>{
        dispatch(searchingProducts(data))
        setSearch('')
        naviagate('/searchpage')
    }
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    try {
      if(search.trim()){
        searchMutate.mutate(search);
        setSearch('')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='search-header'>
      <div className='header-container'>
        <Link to='/'>
          <img 
            src={totalsport} 
            alt="Totalsports" 
            className='brand-logo' 
          />
        </Link>
        
        <div className='search-container'>
          <img 
            src={searchicon} 
            alt="Search" 
            className='search-icon' 
          />
          <div className="search-input-field">
            <form onSubmit={handleSubmit} className='form' >
              <input 
                type="search" 
                placeholder='Search...' 
                name='search'
                value={search}
                className='search-input'
                onChange={(e)=>setSearch(e.target.value)}
              />
              <button className='button-search' type='submit'>Search</button>
            </form>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Search;