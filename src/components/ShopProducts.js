import React, { useState } from 'react';
import Product from './Product';
import { useGlobalContext } from '../Context/context';

const ShopProducts = () => {
  const {
    categories,
    loading,
    filteredProducts,
    filterProducts,
  } = useGlobalContext();

  const [selectCategory, setSelectCategory] = useState('all');
  const [sliderPrice, setSliderPrice] = useState(0);

  const btnref = React.useRef(null);
  const dropref = React.useRef(null);

  const handleFilter = (category, price) => {
    setSelectCategory(category);
    setSliderPrice(price);

    filterProducts(category, price);
  };

  React.useEffect(() => {
    dropref.current.style.minWidth = btnref.current.offsetWidth + 'px';
  }, [selectCategory]);

  return (
    <section className='shop__products container container--pall'>
      <div className='shop__products-title'>
        <h2>Our Products</h2>
      </div>
      <div className='shop__products-filter'>
        <div className='shop__products-categories'>
          <div ref={btnref} className='shop__products-category-btn'>
            category: {selectCategory}
          </div>
          <div ref={dropref} className='shop__products-dropdown'>
            {categories.map((category, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleFilter(category, sliderPrice)}
                >
                  {category}
                </div>
              );
            })}
          </div>
        </div>
        <div className='shop__products-price'>
          <label htmlFor='price'>Price: ${sliderPrice} </label>
          <input
            type='range'
            id='price'
            name='price'
            min='0'
            max='100'
            onInput={(e) => handleFilter(selectCategory, e.target.value)}
            className='shop__products-price-range'
          />
        </div>
      </div>
      {loading ? (
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className='shop__products-center'>
          {filteredProducts.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      )}
    </section>
  );
};

export default ShopProducts;
