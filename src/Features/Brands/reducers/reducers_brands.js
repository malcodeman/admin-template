import { REQUEST_BRANDS } from "../actions/actions_brands";
import { RECIVE_BRANDS } from "../actions/actions_brands";

const initialState = {
  loading: true,
  brands: []
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case REQUEST_BRANDS:
      return {
        ...state
      };
    case RECIVE_BRANDS:
      return {
        ...state,
        loading: false,
        brands: action.payload
      };
    default:
      return state;
  }
};
