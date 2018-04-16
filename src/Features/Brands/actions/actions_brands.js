export const REQUEST_BRANDS = "REQUEST_BRANDS";
export const RECIVE_BRANDS = "RECIVE_BRANDS";

export const UPLOAD_BRANDS = "UPLOAD_BRANDS";
export const UPLOAD_BRANDS_SUCCEEDED = "UPLOAD_BRANDS_SUCCEEDED";
export const UPLOAD_BRANDS_FAILED = "UPLOAD_BRANDS_FAILED";
export const UPLOAD_BRANDS_IMAGE_SUCCEEDED = "UPLOAD_BRANDS_IMAGE_SUCCEEDED";

export const requestBrands = () => {
  return {
    type: REQUEST_BRANDS
  };
};

export const uploadBrands = newBrand => {
  return {
    type: UPLOAD_BRANDS,
    payload: newBrand
  };
};
