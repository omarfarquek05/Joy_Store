import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import Image from 'next/image';
import logo from "../public/assets/j.png"

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    objectFit: 'contain',
  };

  return (
    <nav className="navbar-container">
  
    <div style={divStyle}>
    <Link href="/">
    <Image src={logo} alt="Logo" width={150} height={50} />
      </Link>
      </div>
 

    <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
      <AiOutlineShopping />
      <span className="cart-item-qty"> {totalQuantities} </span>
    </button>

    {showCart && <Cart />} 
       
  </nav>
  )
}

export default Navbar