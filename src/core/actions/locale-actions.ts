import { LocaleReducer } from '@core/reducers/locale-reducer';
import { LOCALES_CONSTANTS } from '@core/constants/locales-contants';

export const changeLocale = (locale: LocaleReducer.State): LocaleReducer.Action => {
    return {
        type: LOCALES_CONSTANTS.CHANGE_LANGUAGE,
        payload: locale
    };
};