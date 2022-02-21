export const allHomePageData = (state) => {
  console.log(
    "🚀 ~ file: homePage.selector.js ~ line 2 ~ allHomePageData ~ state",
    state
  );

  return state.homePage ? state.homePage : "nothing found";
};
