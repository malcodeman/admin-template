import {
  REQUEST_CAMPAIGNS,
  RECIVE_CAMPAIGNS,
  UPLOAD_CAMPAIGNS_SUCCEEDED,
  UPLOAD_CAMPAIGNS_FAILED,
  UPLOAD_PRODUCT_IMAGE_SUCCEEDED
} from "../actions/actions_campaigns";

const initialState = {
  loading: true,
  uploadCampaignsFailed: false,
  campaigns: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CAMPAIGNS:
      return {
        ...state
      };
    case RECIVE_CAMPAIGNS:
      return {
        ...state,
        loading: false,
        campaigns: action.payload
      };
    case UPLOAD_CAMPAIGNS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        campaigns: [...state.campaigns, action.payload]
      };
    case UPLOAD_CAMPAIGNS_FAILED:
      return {
        ...state,
        uploadCampaignsFailed: true
      };
    case UPLOAD_PRODUCT_IMAGE_SUCCEEDED:
      return {
        ...state,
        // Find last item in array and change it's product image with just uploaded product image
        campaigns: state.campaigns.map(
          (campaign, index) =>
            index === state.campaigns.length - 1
              ? { ...campaign, imageUrl: action.payload }
              : campaign
        )
      };
    default:
      return state;
  }
};
