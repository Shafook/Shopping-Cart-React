import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from '../Context/context';

const Product = ({ id, title, price, image, inCart, desc }) => {
  const { addCartItem, setShowCart } = useGlobalContext();

  const handleCartClick = (e) => {
    if (!inCart) {
      addCartItem(id);
      setShowCart(true);
    }
  };

  const handleProductClick = (e) => {
    if (!e.target.classList.contains('shop__products-cart-btn')) {
    }
  };
  return (
    <article className='shop__products-item' onClick={handleProductClick}>
      <div className='shop__products-img-container'>
        <img src={image} alt={title} className='shop__product-img' />
        <button className='shop__products-cart-btn' onClick={handleCartClick}>
          {!inCart ? (
            <>
              <FaShoppingCart className='shop__products-cart-icon' />
              add to cart
            </>
          ) : (
            'in cart'
          )}
        </button>
      </div>
      <div className='shop__products-info'>
        <Link
          to={{
            pathname: `/product/${id}`,
            state: { id, title, price, image, desc },
          }}
        >
          <h3>{title}</h3>
        </Link>
        <h4>${price}</h4>
      </div>
    </article>
  );
};

export default Product;
