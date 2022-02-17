import {
    SET_USER_NUMBER,
    GET_PROFILE_DETAIL_RESPONSE,
} from "../actions/actionTypes";
const initialState = {
    number: null,
    countryCode: null,
    profileDetail: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_NUMBER:
            return {
                ...state,
                number: action.data.number,
                countryCode: action.data.countryCode,
            };
        case GET_PROFILE_DETAIL_RESPONSE:
            return {
                ...state,
                profileDetail: action.json[0],
            };

        default:
            return state;
    }
};

export default reducer;
