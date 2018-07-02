import { CommonReducer } from './common-reducer';
import { LocaleReducer } from './locale-reducer';

// https://github.com/redux-utilities/flux-standard-action
export interface FluxStandardAction<T = string, P = any, M = any> {
    type: T;
    payload: P;
    error?: boolean;
    meta?: M;
}

const common = CommonReducer.reducer;
const locale = LocaleReducer.reducer;

export { common };
export { locale };