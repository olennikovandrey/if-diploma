import { ADD_TO_CART, REMOVE_ITEM, REMOVE_QUANTITY, ADD_QUANTITY } from "../actions/action-types/cart-actions";

const initState = {
  items: JSON.parse(sessionStorage.getItem("catalog")),
  addedItemsToCart: [],
  totalItemsInCart: 0
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let addedItem = state.items.find(item => item.id === action.id);
      let existedItem = state.addedItemsToCart.find(item => action.id === item.id);
      console.log("addedItem:", addedItem);
      console.log("existedItem:", existedItem);
      if (existedItem.length > 0) {
        addedItem.quantity += 1;
        console.log("addedItem.quantity:", addedItem.quantity)
        return {
          ...state,
          totalItemsInCart: state.totalItemsInCart + addedItem.price
        };
      } else {
        addedItem.quantity = 1;
        let newTotal = state.totalItemsInCart + addedItem.price;
        console.log("пизда")
        return {
          ...state,
          addedItemsToCart: {...state.addedItemsToCart, addedItem},
          totalItemsInCart: newTotal
        };
      }
    }

    case REMOVE_ITEM: {
      let itemToRemove = state.addedItemsToCart.find(item => action.id === item.id);
      let newItems = state.addedItemsToCart.filter(item => action.id !== item.id);

      let newTotal = state.totalItemsInCart - (itemToRemove.price * itemToRemove.quantity);
      return {
        ...state,
        addedItemsToCart: newItems,
        totalItemsInCart: newTotal
      };
    }

    case ADD_QUANTITY: {
      let addedItem = state.items.find(item => item.id === action.id);
      addedItem.quantity += 1;
      let newTotal = state.totalItemsInCart + addedItem.price;
      return {
        ...state,
        totalItemsInCart: newTotal
      };
    }

    case REMOVE_QUANTITY: {
      let addedItem = state.items.find(item => item.id === action.id);
      if (addedItem.quantity === 1) {
        let newItems = state.addedItemsToCart.filter(item => item.id !== item.id);
        let newTotal = state.totalItemsInCart -= addedItem.price;
        return {
          ...state,
          addedIaddedItemsToCarttems: newItems,
          totalItemsInCart: newTotal
        };
      } else {
        addedItem.quantity -= 1;
        let newTotal = state.totalItemsInCart - addedItem.price;
        return {
          ...state,
          totalItemsInCart: newTotal
        };
      }
    }

    default:
      return state;
  }
};

export default cartReducer;
