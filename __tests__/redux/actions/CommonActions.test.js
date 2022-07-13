
import  * as common  from "../../../src/redux/actions/common";
import { ACTION_TYPES } from "../../../src/redux/actions/actionTypes";

describe('common actions test', () => {
    it("It tests startLoading action ", () => {
        const  expected = { type: ACTION_TYPES.START_LOADING };
        const res = common.startLoading();
        expect(res).toEqual(expected);
    })
    it("It tests stopLoading action ", () => {
        const  expected = { type: ACTION_TYPES.STOP_LOADING };
        const res = common.stopLoading();
        expect(res).toEqual(expected);
    })
})