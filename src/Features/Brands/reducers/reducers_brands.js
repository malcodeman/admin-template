import {
  REQUEST_BRANDS,
  RECIVE_BRANDS,
  UPLOAD_BRANDS,
  UPLOAD_BRANDS_SUCCEEDED,
  UPLOAD_BRANDS_FAILED
} from "../actions/actions_brands";

const initialState = {
  loading: true,
  uploadBrandsFailed: false,
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
    case UPLOAD_BRANDS_SUCCEEDED:
      return {
        ...state,
        brands: [...state.brands, action.payload]
      };
    case UPLOAD_BRANDS_FAILED:
      return {
        ...state,
        uploadBrandsFailed: true
      };
    default:
      return state;
  }
};
