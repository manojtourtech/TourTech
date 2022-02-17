import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

import ApiConfig from "../../config";

import {
    REGISTER_NUMBER,
    REGISTER_NUMBER_RESPONSE,
    REGISTER_NUMBER_ERROR,
    SHOW_LOADER,
    HIDE_LOADER,
} from "../actions/actionTypes";

/*****  FOR REGISTER NUMBER ******/

export function* registerNumber(action) {
    console.log("Action body=> ", action.body);
    try {
        const { nav, phoneNumber, countryCode, deviceToken, deviceType } =
            action.body;
        var register = axios.create({
            baseURL: ApiConfig.BASE_URL,
            timeout: 10000,
            headers: { "Content-Type": "application/json" },
        });
        yield put({ type: SHOW_LOADER });
        const response = yield register
            .post(ApiConfig.REGISTER, {
                countryCode: countryCode,
                phoneNumber: phoneNumber,
                deviceToken: deviceToken,
                deviceType: deviceType,
            })
            .then((res) => res);
        console.log("Response => ", response);
        if (response.status === 200) {
            yield put({ type: REGISTER_NUMBER_RESPONSE, json: response });
            yield put({ type: HIDE_LOADER });
            nav.navigate("OTP");
        }
    } catch (error) {
        // update your UI to handle other errors
        console.log(error);
        yield put({ type: REGISTER_NUMBER_ERROR, json: error });
        yield put({ type: HIDE_LOADER });
    }
}

