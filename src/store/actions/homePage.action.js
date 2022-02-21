export const homePageActionTypes = {
  FETCH_HOMEPAGE_DATA_SUCCESS: "FETCH_HOMEPAGE_DATA_SUCCESS",
  FETCH_HOMEPAGE_DATA_FAILURE: "FETCH_HOMEPAGE_DATA_FAILURE",
};

const fetchHomePageDataSuccessAction = (data) => {
  return {
    type: homePageActionTypes.FETCH_HOMEPAGE_DATA_SUCCESS,
    data,
  };
};

export const fetchGetHome = () => (dispatch) => {
  const data = { msg: "getting home data from home reducer" };
  dispatch(fetchHomePageDataSuccessAction(data));
  //   return data;
};
