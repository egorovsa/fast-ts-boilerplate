import * as React from 'react';
import { FormattedMessage, } from 'react-intl';
import { LocaleService } from '@core/services/locale-service';
import * as styles from '@common/styles/style.less';
import { css, StyleSheet } from 'aphrodite';
import { connect } from 'react-redux';
import { ApplicationState } from '@core/store';

export interface Props {
    currentLang?: string
}

export interface State {
}

// Aphrodite.js example using
const myStyle = StyleSheet.create({
    test: {
        backgroundColor: '#ddd'
    }
});

class Component extends React.Component<Props, State> {
    static defaultProps: Props = {};

    // state: State = {};

    public render() {
        return (
            <div className={'test'}>
                <h1 className={styles.testModules}>
                    <FormattedMessage
                        id="app.title"
                    />
                </h1>

                <div style={{marginBottom: '30px'}}>
                    Start your app development in /src/app.tsx
                </div>

                <a
                    href="javascript:void(0);"
                    className={'lang-selectors ' + (this.props.currentLang === 'en' && css(myStyle.test))}
                    onClick={() => {
                        LocaleService.changeLocale('en');
                    }}
                >
                    EN
                </a>

                <a
                    href="javascript:void(0);"
                    className={'lang-selectors ' + (this.props.currentLang === 'ru' && css(myStyle.test))}
                    onClick={() => {
                        LocaleService.changeLocale('ru');
                    }}
                >
                    RU
                </a>
            </div>
        );
    }
}

export const App = connect((store: ApplicationState) => {
    return {
        currentLang: store.locale.lang
    };
})(Component);
