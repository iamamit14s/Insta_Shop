import React, { useContext } from 'react'
import MyContext from '../../context/data/MyContext'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const Home = () => {
  const context = useContext(MyContext)

  // const loading =context.loading;
  // const setLoading = context.setLoading;
  // const {loading, setLoading}=context;

  const dispatch=useDispatch();

  const cartItem=useSelector((state)=>state.cart)

  console.log(cartItem);
  
  
//  const addCart=()=>{
//   dispatch(addToCart("shirt"))
//  }

//  const deleteCart=()=>{
//  dispatch(deleteFromCart("shirt"))
//  }


  return (
    <div>
    <Layout>
    <HeroSection />
    <ProductCard/>
    <div className='flex justify-center mt-2 mb-4'>
      <Link to={'/allProducts'}>
      <button className='bg-pink-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-300'>View all products</button>
      </Link>
    </div>
    <Track/>
    <Testimonial/> 
    </Layout>
      
    </div>
    
  )
}

export default Home
