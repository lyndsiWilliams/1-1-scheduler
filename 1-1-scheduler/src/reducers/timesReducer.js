import {
  FETCH_TIMES_START,
  FETCH_TIMES_SUCCESS,
  FETCH_TIMES_FAILURE
} from '../actions';

const initialState = {
  times: [],
  error: "",
  isFetching: false
};


export function timesReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_TIMES_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_TIMES_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        times: action.payload
      };
    case FETCH_TIMES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  };
};