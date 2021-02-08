import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
  loading: false,
  isMobile: false,
  showCart: false,
  products: [],
  filteredProducts: [],
  categories: [],
  cartItems: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const checkSize = () => {
    dispatch({ type: 'CHECK_MOBILE' });
  };

  const setShowCart = (value) => {
    dispatch({ type: 'SHOW_CART', payload: value });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };

  const addCartItem = (id) => {
    dispatch({ type: 'ADD_CART_ITEM', payload: id });
  };

  const removeCartItem = (id) => {
    dispatch({ type: 'REMOVE_CART_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotal = () => {
    dispatch({ type: 'GET_TOTAL' });
  };

  const filterProducts = (category, price) => {
    dispatch({ type: 'FILTER_PRODUCTS', payload: { category, price } });
  };

  const fetchProducts = async () => {
    dispatch({ type: 'LOADING' });

    try {
      let resp = await fetch('/products.json');
      let respData = await resp.json();
      const { items } = respData;

      const newProducts = items.map((item) => {
        const id = item.sys.id;
        const { price, title, category, desc } = item.fields;
        const image = item.fields.image.fields.file.url;
        return { id, title, category, price, image, desc, inCart: false };
      });

      dispatch({ type: 'DISPLAY_PRODUCTS', payload: newProducts });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    checkSize();
  }, []);

  useEffect(() => {
    getTotal();
  }, [state.cartItems]);

  useEffect(() => {
    window.addEventListener('resize', checkSize);

    return () => {
      window.removeEventListener('resize', checkSize);
    };
  });

  return (
    <AppContext.Provider
      value={{
        ...state,
        checkSize,
        setShowCart,
        addCartItem,
        removeCartItem,
        toggleAmount,
        clearCart,
        filterProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
