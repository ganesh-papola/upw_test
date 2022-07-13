import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  * as auth  from "../../../src/redux/actions/auth";
import { ACTION_TYPES } from "../../../src/redux/actions/actionTypes";

describe('AuthActions test', () => {
    it("It tests SIGN IN action ", () => {
        const  expected = {type: ACTION_TYPES.SIGN_IN, payload: {test: "test payload"}};
        const res = auth.signIn({test: "test payload"});
        expect(res).toEqual(expected);
    })
    it("It tests SIGN OUT action ", () => {
        const  expected = {type: ACTION_TYPES.SIGN_OUT};
        const res = auth.signOut({test: "test payload"});
        expect(res).toEqual(expected);
    })
    it("It tests UPDATE_AUTH_TOKEN action ", () => {
        const  expected = {type: ACTION_TYPES.UPDATE_AUTH_TOKEN, payload: {test: "test payload"}};
        const res = auth.updateAuthTokenRedux({test: "test payload"});
        expect(res).toEqual(expected);
    })
    it("It tests UPDATE_USER_DETAILS  action ", () => {
        const  expected = {type: ACTION_TYPES.UPDATE_USER_DETAILS, payload: {test: "test payload"}};
        const res = auth.updateUserDetailsRedux({test: "test payload"});
        expect(res).toEqual(expected);
    })
    it("It tests UPDATE_USER_DETAILS  action ", () => {
        const  expected = {type: ACTION_TYPES.SIGNIN_FAILED, payload: {test: "test payload"}};
        const res = auth.signInFailed({test: "test payload"});
        expect(res).toEqual(expected);
    })
})