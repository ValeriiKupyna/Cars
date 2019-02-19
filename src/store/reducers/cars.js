import { CarActionTypes, CommonActionTypes } from '../action-types';

const initialState = {
  cars: [],
  searchNumber: '',
  error: null,
  isPending: false
}

const { GET_CAR, SET_SEARCH_CAR_NUMBER } = CarActionTypes;
const { START, ERROR, SUCCESS, RESET } = CommonActionTypes;

const getCars = (state) => {
  return { ...state, error: null, isPending: true }
};

const getCarsSuccess = (state, payload) => {
  return { ...state, isPending: false, cars: payload }
};

const getCarsError = (state, payload) => {
  return { ...state, error: payload, isPending: false, cars: [] }
};

const setSearchCarsNumber = (state, payload) => {
  return { ...state, searchNumber: payload }
};

const cars = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CAR + START: return getCars(state)
    case GET_CAR + SUCCESS: return getCarsSuccess(state, payload)
    case GET_CAR + ERROR: return getCarsError(state, payload)
    case SET_SEARCH_CAR_NUMBER: return setSearchCarsNumber(state, payload)
    case GET_CAR + RESET: return initialState
    default:
      return { ...state }
  }
};

export default cars;