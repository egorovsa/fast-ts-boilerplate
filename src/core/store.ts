import { combineReducers, createStore, Store, compose } from 'redux';
import * as reducers from './reducers/index';
import { CommonReducer } from '@core/reducers/common-reducer';
import { LocaleReducer } from '@core/reducers/locale-reducer';

export interface ApplicationState {
    common: CommonReducer.State;
    locale: LocaleReducer.State;
}

let enhancer = {};

if (process.env.NODE_ENV === 'development') {
    const persistState = require('redux-devtools').persistState;
    const DevTools = require('../dev-tools').DevTools;

    enhancer = compose(
        DevTools.instrument(),
        persistState(
            window.location.href.match(
                /[?&]debug_session=([^&#]+)\b/
            ) as any
        )
    );
}

export const store: Store<ApplicationState> = createStore(
    combineReducers<ApplicationState>(reducers),
    enhancer as any
);
