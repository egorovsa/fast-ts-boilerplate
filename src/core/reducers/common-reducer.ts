import { COMMON_CONSTANTS } from '../constants/common-contants';
import { FluxStandardAction } from './index';

export namespace CommonReducer {
    export interface Action extends FluxStandardAction<COMMON_CONSTANTS> {
    }

    export interface State {
        loading: boolean;
    }

    const initialState: State = {
        loading: true
    };

    export const reducer = (state: State = initialState, action: Action): State => {
        switch (action.type) {
            case COMMON_CONSTANTS.SHOW_LOADING:
                return {...state, ...{loading: true}};

            case COMMON_CONSTANTS.HIDE_LOADING:
                return {...state, ...{loading: false}};

            default:
                return state;
        }
    };
}