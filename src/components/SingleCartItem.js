import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from '../Context/context';

const SingleCartItem = ({ id, image, title, price, amount }) => {
  const { toggleAmount, removeCartItem } = useGlobalContext();

  React.useEffect(() => {
    if (amount <= 0) {
      removeCartItem(id);
    }
  });

  return (
    <article className='cart__item'>
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <span className='cart__remove-item' onClick={() => removeCartItem(id)}>
          remove
        </span>
      </div>
      <div>
        <FaChevronUp
          className='cart__item-amount-up'
          onClick={() => toggleAmount(id, 'inc')}
        />
        <p className='cart__item-amount'>{amount}</p>
        <FaChevronDown
          className='cart__item-amount-down'
          onClick={() => toggleAmount(id, 'dec')}
        />
      </div>
    </article>
  );
};

export default SingleCartItem;
