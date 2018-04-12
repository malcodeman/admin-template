import { REQUEST_CAMPAIGNS } from "../actions/actions_campaigns";
import { RECIVE_CAMPAIGNS } from "../actions/actions_campaigns";

const initialState = {
  loading: true,
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
    default:
      return state;
  }
};
