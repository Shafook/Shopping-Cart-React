import React from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import SingleCartItem from '../components/SingleCartItem';
import { useGlobalContext } from '../Context/context';

const Cart = () => {
  const {
    showCart,
    setShowCart,
    cartItems,
    clearCart,
    total,
  } = useGlobalContext();

  // const cartContainer = useRef(null);

  // useEffect(() => {
  //   if (!isMobile) {
  //     const left = position.right - 450;
  //     // cartContainer.current.style.left = `${left}px`;
  //   } else {
  //     // cartContainer.current.style.left = `0px`;
  //   }
  // }, [position]);

  return (
    <section
      className={`${
        showCart ? 'cart container transparentBcg' : 'cart container'
      }`}
    >
      <div
        className={`${showCart ? 'cart__content showCart' : 'cart__content'}`}
      >
        <span className='cart__close-cart'>
          <AiFillCloseSquare onClick={() => setShowCart(false)} />
        </span>
        <h2>Your Cart</h2>
        <div className='cart__items'>
          {cartItems.map((item) => {
            return <SingleCartItem key={item.id} {...item} />;
          })}
        </div>
        <footer className='cart__footer'>
          <h3>Your Total : ${total}</h3>
          <button className='cart__clear-btn banner-btn' onClick={clearCart}>
            clear cart
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Cart;
