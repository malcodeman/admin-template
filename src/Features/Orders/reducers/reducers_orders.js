import { REQUEST_ORDERS } from "../actions/actions_orders";
import { RECIVE_ORDERS } from "../actions/actions_orders";

const initialState = {
  loading: true,
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ORDERS:
      return {
        ...state
      };
    case RECIVE_ORDERS:
      return {
        ...state,
        loading: false,
        orders: action.payload
      };
    default:
      return state;
  }
};
