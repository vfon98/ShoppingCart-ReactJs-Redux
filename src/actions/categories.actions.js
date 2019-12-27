import * as types from "../constants/actionTypes";
import axios from "../axios/axios.base";
import { CATEGORY_LIST } from "../api/endpoints";

export const fetchCategories = () => {
  return dispatch => {
    axios
      .get(CATEGORY_LIST)
      .then(res => {
        dispatch({
          type: types.FETCH_CATEGORIES,
          payload: res.data
        });
      })
      .catch(console.log);
  };
};

export const changeSelectedCategory = categoryName => {
  return (dispatch, getState) => {
    let currentSelected = getState().categoriesReducer.categories.find(
      category => category.name === categoryName
    );
    dispatch({
      type: types.CHANGE_SELECTED_CATEGORY,
      payload: { category: currentSelected }
    });
    // Reset page number to 1 when changing category
    // Prevent 404 error caused by overflow page number
    dispatch({
      type: types.GO_TO_PAGE,
      payload: { page_number: 1 }
    });
  };
};
