import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import features from '../Assets/hero_data';
import { useGlobalContext } from '../Context/context';

const arrow = (
  <svg width='40' height='12' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z'
      fill='#000'
      fillRule='nonzero'
    />
  </svg>
);

const Home = () => {
  const { isMobile } = useGlobalContext();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(features.length - 1);
    }
    if (index >= features.length) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let timeout = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(timeout);
  }, [index]);

  return (
    <section className='main container'>
      <header className='main__hero-image'>
        <div className='img-container'>
          {features.map((item, itemIndex) => {
            const image = isMobile ? item.image_mobile : item.image_desktop;
            let position = 'nextSlide';
            if (index === itemIndex) {
              position = 'activeSlide';
            }
            if (
              itemIndex === index - 1 ||
              (index === 0 && itemIndex === features.length - 1)
            ) {
              position = 'lastSlide';
            }

            return (
              <article key={itemIndex} className={position}>
                <img src={image} alt='' />
              </article>
            );
          })}
        </div>
        <div className='main__hero-navbtns'>
          <button
            type='button'
            className='btnLeft'
            onClick={() => setIndex(index - 1)}
          >
            <img src='/images/icon-angle-left.svg' alt='' />
          </button>
          <button
            type='button'
            className='btnRight'
            onClick={() => setIndex(index + 1)}
          >
            <img src='/images/icon-angle-right.svg' alt='' />
          </button>
        </div>
      </header>
      <section className='main__hero-description'>
        {features.map((item, itemIndex) => {
          const { title, description } = item;
          let position = 'nextSlide';
          if (index === itemIndex) {
            position = 'activeSlide';
          }
          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === features.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article key={itemIndex} className={` container--pall ${position}`}>
              <h1>{title}</h1>
              <p>{description}</p>
              <div className='main__shop-link'>
                <Link to='/shop'>
                  <span>Shop Now</span>
                  {arrow}
                </Link>
              </div>
            </article>
          );
        })}
      </section>
      <div className='main__about main__about-image'>
        <img src='/images/image-about-dark.jpg' alt='' />
      </div>
      <div className='main__about main__about-description container--pall'>
        <div className='content'>
          <div className='title'>About our furniture</div>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </div>
      <div className='main__about main__about-image'>
        <img src='/images/image-about-light.jpg' alt='' />
      </div>
    </section>
  );
};

export default Home;
