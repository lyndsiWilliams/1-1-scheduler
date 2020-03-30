// Axios
import axios from 'axios';
// Destructuring command names
// Times
export const FETCH_TIMES_START = "FETCH_TIMES_START";
export const FETCH_TIMES_SUCCESS = "FETCH_TIMES_SUCCESS";
export const FETCH_TIMES_FAILURE = "FETCH_TIMES_FAILURE";


export const getTimes = () => {
  return dispatch => {
    dispatch({ type: FETCH_TIMES_START });
    axios.get("https://xivapi.com/freecompany/9229142273877456802?data=FCM")
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_TIMES_SUCCESS, payload: res.data.FreeCompanyMembers });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
          type: FETCH_TIMES_FAILURE,
          payload: `${err.response.status} ${err.response.data}`
        });
      });
  };
};