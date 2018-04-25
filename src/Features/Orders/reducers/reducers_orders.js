import {
  REQUEST_ORDERS,
  RECIVE_ORDERS,
  UPDATE_ORDERS_STATUS_SUCCEEDED
} from "../actions/actions_orders";

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
    case UPDATE_ORDERS_STATUS_SUCCEEDED:
      return {
        ...state,
        // IDs in database go from 1 so index + 1 is necessary
        orders: state.orders.map(
          (order, index) =>
            index + 1 === action.payload.id
              ? { ...order, orderStatus: action.payload.orderStatus }
              : order
        )
      };
    default:
      return state;
  }
};
