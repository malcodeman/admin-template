import {
  REQUEST_BRANDS,
  RECIVE_BRANDS,
  UPLOAD_BRANDS_SUCCEEDED,
  UPLOAD_BRANDS_FAILED,
  UPLOAD_BRANDS_IMAGE_SUCCEEDED
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
    case UPLOAD_BRANDS_IMAGE_SUCCEEDED:
      return {
        ...state,
        // Find last item in array and change it's logoUrl with just uploaded logo image
        brands: state.brands.map(
          (brand, index) =>
            index === state.brands.length - 1
              ? { ...brand, logoUrl: action.payload }
              : brand
        )
      };
    default:
      return state;
  }
};
