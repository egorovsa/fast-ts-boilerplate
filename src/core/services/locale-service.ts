import { connect } from 'react-redux';
import { ApplicationState, store } from '@core/store';
import { IntlProvider } from 'react-intl';
import * as messages from '@core/locales';
import { changeLocale } from '@core/actions/locale-actions';
import { addLocaleData } from 'react-intl';
import * as ruLocaleData from 'react-intl/locale-data/ru';
import * as enLocaleData from 'react-intl/locale-data/en';

addLocaleData([...enLocaleData, ...ruLocaleData]);

export class LocaleService {
    static connectedIntlProvider(): React.ComponentClass {
        return connect(
            (
                state: ApplicationState) => {
                const {lang, messages} = state.locale;
                return {locale: lang, messages};
            })(IntlProvider);
    }

    static changeLocale(locale: string): void {
        store.dispatch(changeLocale({
            lang: locale,
            messages: messages[locale]
        }));
    }

    static IntlErrors() {
        /* tslint-disable no-console */
        if (process.env.NODE_ENV !== 'production') {
            const originalConsoleError = console.error;

            if (console.error === originalConsoleError) {
                console.error = (...args) => {
                    if (args[0].indexOf && args[0].indexOf('[React Intl] Missing message:') === 0) {
                        return;
                    }

                    Reflect.apply(originalConsoleError, console, args);
                };
            }
        }
        /* tslint-enable */
    }
}

export const ConnectedIntlProvider = LocaleService.connectedIntlProvider();
LocaleService.changeLocale('en');
