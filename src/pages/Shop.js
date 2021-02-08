import React from 'react';
import ShopProducts from '../components/ShopProducts';
import Cart from '../components/Cart';

const Shop = () => {
  // const [position, setPosition] = useState({});

  // const headerContainer = useRef(null);

  // const setCartPosition = () => {
  //   if (headerContainer) {
  //     setPosition(() => headerContainer.current.getBoundingClientRect());
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', setCartPosition);

  //   return () => {
  //     window.removeEventListener('resize', setCartPosition);
  //   };
  // }, [position]);

  // useEffect(() => {
  //   setCartPosition();
  // }, []);

  return (
    <section className='shop'>
      <Header />
      <ShopProducts />
    </section>
  );
};

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: 'url(/images/products/hero-bcg.jpeg)',
      }}
      className='container container--pall'
    >
      <div className='shop__banner'>
        <h1 className='shop__banner-title'>Furniture Collection</h1>
        <button type='button' className='banner-btn'>
          shop now
        </button>
      </div>
    </header>
  );
};

export default Shop;
