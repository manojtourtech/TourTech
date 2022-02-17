import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

import {
    SHOW_LOADER,
    HIDE_LOADER,
    GET_PROFILE_DETAIL_RESPONSE,
} from "../actions/actionTypes";
import ApiConfig from "../../config";

/*****  GET PROFILE DETAIL ******/

export function* getProfileDetail(action) {
    console.log("Action Profile Detail => ", action);
    try {
        const { session_id } = action.data;

        console.log("Session Id =", session_id);
        var getProfileApi = axios.create({
            baseURL: ApiConfig.BASE_URL,
            timeout: 10000,
            headers: { "Content-Type": "application/json" },
            params: { sessionId: session_id },
        });
        yield put({ type: SHOW_LOADER });
        const response = yield getProfileApi
            .get(ApiConfig.GET_PROFILE)
            .then((res) => res);
        console.log("Get Profile Response => ", response);
        if (response.status === 200) {
            yield put({
                type: GET_PROFILE_DETAIL_RESPONSE,
                json: response?.data?.userDetail,
            });
            yield put({ type: HIDE_LOADER });
        }
    } catch (error) {
        // update your UI to handle other errors
        console.log("Profile Detail Error =", error);
        yield put({ type: HIDE_LOADER });
    }
}
