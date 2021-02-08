import React from 'react';

const About = () => {
  return (
    <section className='about'>
      <div className='container container-pall'>
        <div className='about__image'>
          <img src='/images/image-about-dark.jpg' alt='' />
        </div>
        <div className='about__image'>
          <img src='/images/image-about-light.jpg' alt='' />
        </div>
        <article className='about__text'>
          <h1>About our furniture</h1>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
