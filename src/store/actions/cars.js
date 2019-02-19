import { CarActionTypes, CommonActionTypes } from "../action-types";

const { GET_CAR, SET_SEARCH_CAR_NUMBER } = CarActionTypes;
const { START, ERROR, SUCCESS, RESET } = CommonActionTypes;

export const getCars = (payload) => ({
    type: GET_CAR + START,
    payload
});

export const getCarsSuccess = (payload) => ({
    type: GET_CAR + SUCCESS,
    payload,
});

export const getCarsError = (payload) => ({
    type: GET_CAR + ERROR,
    payload
});

export const getCarsReset = () => ({
    type: GET_CAR + RESET,
});

export const setCarSearchNumber = (payload) => ({
    type: SET_SEARCH_CAR_NUMBER,
    payload
});
