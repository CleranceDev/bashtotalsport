import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import commit from '../../../images/commit.png';
import running from '../../../images/ruuning.png';
import newbalance from '../../../images/newbalance.png';
import solom from '../../../images/new new balance.png';
import hoka from '../../../images/hoka clifton.png';
import newB from '../../../images/new balance 1080.png';
import asiclite from '../../../images/asiclite.png';
import nimbus from '../../../images/gel-nibus.png';
import limited from '../../../images/asics limited series.png';
import runninghome from '../../../images/homerunning.png';
import percentage from '../../../images/50.png';
import sweats from '../../../images/sweats.png';
import Brands from '../../Brands';
import './style.scss';
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import  {selectProduct} from '../../features/productSlice'
import {useDispatch,useSelector} from 'react-redux'
import {addItem} from '../../features/cartSlicer'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const currentUser = useSelector((state)=>state.users.currentUser) 
  const itemscart = useSelector((state)=>state.cart.item) 
  const dispatch = useDispatch()
  const API_BASE_URL = 'https://bashtotalsportbackend.onrender.com';
  const { data: productDisplay } = useQuery({
    queryKey: ['products display'],
    queryFn: async () => {
      const response = await axios.get(`${API_BASE_URL}/api/v1/home/display`);
      return response.data; 
    }
  });
  const scrollRef = useRef();

  const left = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const right = () => {
    scrollRef.current.scrollLeft += 300;
  };
  const down = useRef()
  const downLeft = ()=>{
    down.current.scrollLeft -= 100
  }
  const downRight = ()=>{
    down.current.scrollLeft += 100
  }

  const brandsContainerRef = useRef(null);


  const scrollLeft = () => {
    if (brandsContainerRef.current) {
      brandsContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (brandsContainerRef.current) {
      brandsContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  const gotoHoka = ()=>{
    navigate('/hoka')
  }
  const gotoNewB = ()=>{
    navigate('/NewBalance')
  }
  const gotoAsic = ()=>{
    navigate('/Asic')
  }
  const gotoNike = ()=>{
    navigate('/nike')
  }
  const gotoUnderArmor = ()=>{
    navigate('/UnderArmor')
  }
  return (
    <div>
      <div className='totalsport'>
        <h1>Totalsport</h1>
      </div>
      <div className='hero-container'>
        <div className='hero-image'>
          <img src={commit} alt="gym image" />
          <div className="hero-text">
            <h1>Commit to more</h1>
            <p className="tagline">Start. Stay consistent. Show progress.</p>
            <Link to="/brands" className="cta-button">Discover more →</Link>
          </div>
        </div>
        <div className='content-tennis'>
          <hr />
          <img src={sweats} alt="sweats" />
          <div className='big-chill'>
            <hr />
            <h1>The Big Chill</h1>
            <p>Work out. Head out. Hang out.</p>
          </div>

        <div className="all">
          <button onClick={left}>
            <FaChevronLeft />
          </button>
          <div className="product-display" ref={scrollRef}>
           
            {Array.isArray(productDisplay) &&
              productDisplay.map((prod) => {

                const productInfor = () => {
                  dispatch(selectProduct(prod));
                };
                const addtocart = ()=>{
                  if(currentUser.length===0){
                    return alert('Please login to add to cart')
                  }
                  const itemExist = itemscart.find((exist)=>exist.prod_id === prod.prod_id)
                  if(itemExist){
                    alert('product already in the cart')
                    return;
                  }
                  dispatch(addItem(prod));
                  alert('added to cart')
                  setTimeout(()=>{
                    navigate('/cart')
                  },500)
                }
                return (
                  <div
                    className="products-con"
                    key={prod.prod_id}
                    onClick={productInfor}
                  >
                    <img src={prod.img} alt={prod.Prod_name} />
                    <div className="discription">
                      <p>{prod.Prod_name}</p>
                      <p>{prod.brand_name}</p>
                      <p>R{prod.Price}</p>
                      <button style=
                      {{
                        width:'100%',
                        backgroundColor:'black',
                        color:'white',
                        borderRadius:'1px',
                        marginTop:'2px'
                      }} onClick={addtocart}>Add to cart</button>
                    </div>
      
                  </div>

                );
              })}
          </div>
          <button onClick={right}>
            <FaChevronRight />
          </button>
        </div>
          
        </div>
        <div className="running">
          <img src={running} alt="running" onClick={gotoNike} />
        </div>
        <div className="newbalance">
          <img src={newbalance} alt="new balance" onClick={gotoNewB} />
          <img src={solom} alt="solom" onClick={gotoUnderArmor} />
        </div>
        <div className="clifton-hoka">
          <button onClick={downLeft}><FaChevronLeft/></button>
          <div className="hoka-display" ref={down}>
            <img src={hoka} alt="hoka" onClick={gotoHoka}/>
            <img src={newB} alt="new balance 1080" onClick={gotoNewB} />
            <img src={asiclite} alt="asic lite" onClick={gotoAsic} />
            <img src={nimbus} alt="gel nimbus" onClick={gotoAsic} />
            <img src={limited} alt="asics limited" onClick={gotoAsic} />
          </div>
          <button onClick={downRight}><FaChevronRight/></button>
        </div>
        <div className="homeruning">
          <img src={runninghome} alt="home running" />
          <div className='shop-now'>
            <h1>Shop now</h1>
          </div>
        </div>
        <div className="off-percent">
          <img src={percentage} alt="50 percent off" />
        </div>

        <div className="brands">
          <hr className='divider' />
          <button className="scroll-arrow left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>
          <div className="brands-container" ref={brandsContainerRef}>
            {Brands.map((brand) => (
              <div className="brands-item" key={brand.id}>
                <img src={brand.imgPath} alt={brand.name} />
              </div>
            ))}
          </div>
          <button className="scroll-arrow right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
          <hr className='divider' />
        </div>
      </div>
    </div>
  );
};

export default Home; 
