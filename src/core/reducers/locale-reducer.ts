import { FluxStandardAction } from '@core/reducers/index';
import { LOCALES_CONSTANTS } from '@core/constants/locales-contants';
import * as messages from '@core/locales';

export namespace LocaleReducer {
    export interface Action extends FluxStandardAction<LOCALES_CONSTANTS> {
        payload: State;
    }

    export interface State {
        lang: string;
        messages: { [id: string]: string };
    }

    const initialState: State = {
        lang: 'en',
        messages: messages.en
    };

    export const reducer = (state: State = initialState, action: Action): State => {
        switch (action.type) {
            case LOCALES_CONSTANTS.CHANGE_LANGUAGE:
                return {...state, ...action.payload};

            default:
                return state;
        }
    };
}
