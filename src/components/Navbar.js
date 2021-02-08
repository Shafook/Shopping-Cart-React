import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from '../Context/context';

const Navbar = () => {
  const { setShowCart, amount } = useGlobalContext();

  const [isToggled, setIsToggled] = useState(false);

  return (
    <section className='navbar'>
      <div
        className={`container container--px container--py ${
          isToggled ? 'open' : ''
        }`}
      >
        <div
          className={`navbar__toggle hide-for-desktop`}
          onClick={() => setIsToggled(!isToggled)}
        >
          {!isToggled ? (
            <img src='/images/icon-hamburger.svg' alt='' />
          ) : (
            <img src='/images/icon-close.svg' alt='' />
          )}
        </div>

        <div className='navbar__logo'>
          <Link to='/'>
            <img src={'/images/logo.svg'} alt='' />
          </Link>
        </div>

        <div className='navbar__links hide-for-mobile'>
          <Link to='/'>home</Link>
          <Link to='/shop'>shop</Link>
          <Link to='/about'>about</Link>
          <Link to='/contact'>contact</Link>
        </div>

        {isToggled && (
          <>
            <div className='navbar__menu hide-for-desktop'>
              <Link to='/'>home</Link>
              <Link to='/shop'>shop</Link>
              <Link to='/about'>about</Link>
              <Link to='/contact'>contact</Link>
            </div>
            <div className='navbar__overlay hide-for-desktop'></div>
          </>
        )}

        <div className='navbar__cart-btn'>
          <button onClick={() => setShowCart(true)}>
            <FaShoppingCart />
          </button>
          <div className='navbar__cart-items'>{amount}</div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
