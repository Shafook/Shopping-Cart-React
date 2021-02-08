import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SingleProduct = (props) => {
  const {
    state: { id, title, image, price, desc },
  } = useLocation();
  React.useEffect(() => {
    // console.log('props', product);
  });

  return (
    <section className='product container'>
      <div className='product__image-container'>
        <img src={image} alt={title} className='product__image-dark' />
        <img src={image} alt={title} className='product__image-light' />
      </div>
      <div className='product__info container--pall'>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <Link to='/' className='button banner-btn'>
        back Home
      </Link>
      <div className='product__center'></div>
    </section>
  );
};

export default SingleProduct;
