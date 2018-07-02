import { COMMON_CONSTANTS } from '@core/constants/common-contants';
import { CommonReducer } from '@core/reducers/common-reducer';

export const someAction = (): CommonReducer.Action => {
    return {
        type: COMMON_CONSTANTS.SHOW_LOADING,
        payload: {}
    };
};