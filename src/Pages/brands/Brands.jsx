import React from 'react'
import './logo.scss'
import { Link } from 'react-router-dom'
import adidas from "../../../images/logos/adidas new.png"
import newbalance from "../../../images/logos/new balance logo red.png"
import superga from "../../../images/logos/superga.png"
import hoka from "../../../images/logos/hoka-seeklogo.png" 
import hitec from "../../../images/logos/hiteclogo.png" 
import under from "../../../images/logos/under armour.png" 
import asic from "../../../images/logos/asic.png" 
import newEra from "../../../images/logos/New York Yankees.png" 
import nike from "../../../images/logos/nike logo black.png" 
import puma from "../../../images/logos/puma.png" 


const Brands = () => {
  return (
    <div className='main-con'>
      <div className='content'>
        <div className='logos'>
          <Link to='/adidas' className='link'><img  src={adidas} alt="adidas" /></Link>
          <Link to='/nike' className='link'><img   src={nike} alt="nike" /></Link>
          <Link to='/puma' className='link'><img src={puma} alt="Puma" /></Link>
          <Link to='/hoka' className='link'><img src={hoka} alt="Hoka" /></Link>
          <Link to='/newEra' className='link'><img src={newEra} alt="New era" /></Link>
          <Link to='/newbalance' className='link'><img src={newbalance} alt="New Balance" /></Link>
          <Link to='/asic' className='link'><img  src={asic} alt="Asic" /></Link>
          <Link to='/underarmor' className='link'><img  src={under} alt="Under Armor" /></Link>
          <Link to='/superga' className='link'><img src={superga} alt="Superga" /></Link>
          <Link to='/hitec' className='link'><img src={hitec} alt="Hi-tec" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Brands