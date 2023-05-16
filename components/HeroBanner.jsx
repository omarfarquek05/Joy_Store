import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../lib/client';
//import { useStateContext } from '@/context/StateContext';

const HeroBanner = ({ heroBanner }) => {
 


  return (
    <div className='hero-banner-container'>
     <div>
      <p className='beats-solo'>{heroBanner.smallText}</p>
       <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)}alt="headphone" className="hero-banner-image"/>
     </div>
         
       <div>
      {/* 
       <Link href={`/product/${heroBanner.product}`}>
    
       <button type="button">{heroBanner.buttonText}</button>
     </Link>      
    
     */}
     <h3>Go & Grap your own item</h3>

     </div>
         
     <div className='desc'>
      <h5>description</h5>
       <p>{heroBanner.desc}</p>
     
     </div>
     
    </div>
  );
}

export default HeroBanner