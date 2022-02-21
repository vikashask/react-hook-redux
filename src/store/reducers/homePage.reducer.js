import { homePageActionTypes } from "../actions/homePage.action";

export default function homePageReducer(state = null, action) {
  switch (action.type) {
    case homePageActionTypes.FETCH_HOMEPAGE_DATA_SUCCESS:
      return action.data;

    default:
      return state;
  }
}
