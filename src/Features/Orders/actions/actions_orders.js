export const REQUEST_ORDERS = "REQUEST_ORDERS";
export const RECIVE_ORDERS = "RECIVE_ORDERS";
export const UPDATE_ORDERS_STATUS = "UPDATE_ORDERS_STATUS";
export const UPDATE_ORDERS_STATUS_SUCCEEDED = "UPDATE_ORDERS_STATUS_SUCCEEDED";
export const UPDATE_ORDERS_STATUS_FAILED = "UPDATE_ORDERS_STATUS_FAILED";

export const requestOrders = () => {
  return {
    type: REQUEST_ORDERS
  };
};

export const updateOrdersStatus = newStatus => {
  return {
    type: UPDATE_ORDERS_STATUS,
    payload: newStatus
  };
};
