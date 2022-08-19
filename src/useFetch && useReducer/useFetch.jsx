import axios from "axios";
import { useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const actions = {
  fetchRequest: "FETCH_DATA_REQUEST",
  fetchSuccess: "FETCH_DATA_SUCCESS",
  fetchFailure: "FETCH_DATA_FAILURE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.fetchRequest: {
      return { ...state, loading: true, data: null, error: null };
    }
    case actions.fetchSuccess: {
      return { ...state, loading: false, data: action.payload, error: null };
    }
    case actions.fetchFailure: {
      return { ...state, loading: false, data: null, error: action.payload };
    }
    default:
      return state;
  }
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: actions.fetchRequest });

    axios
      .get(url)
      .then((res) => {
        dispatch({ type: actions.fetchSuccess, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: actions.fetchFailure, payload: err.message });
      });
  }, [url]);

  return state;
};

export default useFetch;
