import {api} from '../server';

const DATA_API_REQUEST = '@dataFetch';
const DATA_API_SUCCESS = '@dataFetchSuccess';
const DATA_API_FAILURE = '@dataFetchFailure';

const fetchStatus = {
  IDLE: 0,
  INPROGRESS: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

const initialState = {
  acccountBalance: 0,
  cardDetails: {
    nameOnCard: '',
    cardNumber: '',
    validity: '',
    cvv: '',
  },
  expenses: {
    isLimitSet: false,
    currentExpenditure: 0,
    limit: 0,
  },
  fetchStatus: fetchStatus.IDLE,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DATA_API_REQUEST:
      return {...state, fetchStatus: fetchStatus.INPROGRESS};
    case DATA_API_SUCCESS:
      return {...state, ...action.payload, fetchStatus: fetchStatus.SUCCESS};
    case DATA_API_FAILURE:
      return {...state, fetchStatus: fetchStatus.FAILURE};
    default:
      return state;
  }
}

export const fetchData = () => {
  return async dispatch => {
    dispatch({
      type: 'DATA_API_REQUEST',
    });
    const data = api.fetch();
    return dispatch({
      type: DATA_API_SUCCESS,
      payload: data,
    });
  };
};

export const setLimit = limit => {
  api.post(Number(limit));
  return dispatch => dispatch(fetchData());
};
