import * as React from 'react';
import { FormattedMessage, } from 'react-intl';
import { LocaleService } from '@core/services/locale-service';
import * as styles from '@common/styles/style.less';
import { css, StyleSheet } from 'aphrodite';

export interface Props {
}

export interface State {
}

const myStyle = StyleSheet.create({
    test: {
        backgroundColor: '#ddd'
    }
});

export class App extends React.Component<Props, State> {
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
                    className={'lang-selectors ' + (css(myStyle.test))}
                    onClick={() => {
                        LocaleService.changeLocale('en');
                    }}
                >
                    EN
                </a>

                <a
                    href="javascript:void(0);"
                    className={'lang-selectors ' + (css(myStyle.test))}
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
