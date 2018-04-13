import { REQUEST_USERS } from "../actions/actions_users";
import { RECIVE_USERS } from "../actions/actions_users";

const initialState = {
  loading: true,
  users: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state
      };
    case RECIVE_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    default:
      return state;
  }
};
