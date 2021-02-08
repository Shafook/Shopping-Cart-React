const reducer = (state, action) => {
  switch (action.type) {
    case 'CHECK_MOBILE': {
      return window.innerWidth <= 640
        ? { ...state, isMobile: true }
        : { ...state, isMobile: false };
    }

    case 'LOADING': {
      return { ...state, loading: true };
    }

    case 'DISPLAY_PRODUCTS': {
      const categories = [
        'all',
        ...new Set(action.payload.map((product) => product.category)),
      ];
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        categories,
        loading: false,
      };
    }

    case 'FILTER_PRODUCTS': {
      if (action.payload.category === 'all') {
        return {
          ...state,
          filteredProducts: state.products.filter(
            (product) => product.price <= action.payload.price
          ),
        };
      }
      const filteredProducts = state.products.filter(
        (product) =>
          product.category === action.payload.category &&
          product.price <= action.payload.price
      );
      return { ...state, filteredProducts };
    }

    case 'SHOW_CART':
      return { ...state, showCart: action.payload };

    case 'ADD_CART_ITEM': {
      const products = state.products.map((product) =>
        product.id === action.payload ? { ...product, inCart: true } : product
      );

      const filteredProducts = state.filteredProducts.map((product) =>
        product.id === action.payload ? { ...product, inCart: true } : product
      );

      const product = state.products.find(
        (product) => product.id === action.payload
      );
      const newCartItem = { ...product, amount: 1 };
      return {
        ...state,
        products,
        filteredProducts,
        cartItems: [...state.cartItems, newCartItem],
      };
    }

    case 'REMOVE_CART_ITEM': {
      const products = state.products.map((product) =>
        product.id === action.payload ? { ...product, inCart: false } : product
      );
      const filteredProducts = state.filteredProducts.map((product) =>
        product.id === action.payload ? { ...product, inCart: false } : product
      );
      const cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, products, filteredProducts, cartItems };
    }

    case 'TOGGLE_AMOUNT': {
      const newCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === 'inc')
            return { ...item, amount: item.amount + 1 };
          if (action.payload.type === 'dec')
            return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      return { ...state, cartItems: newCartItems };
    }

    case 'CLEAR_CART': {
      const products = state.products.map((product) => {
        return { ...product, inCart: false };
      });
      const filteredProducts = state.filteredProducts.map((product) => {
        return { ...product, inCart: false };
      });
      return { ...state, products, filteredProducts, cartItems: [] };
    }

    case 'GET_TOTAL': {
      let { total, amount } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.total += price * amount;
          cartTotal.amount += amount;

          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    }

    default:
      break;
  }
  throw new Error('no matching action');
};

export default reducer;
