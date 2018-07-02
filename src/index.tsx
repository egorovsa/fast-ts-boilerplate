import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './app';
import { ConnectedIntlProvider, LocaleService } from '@core/services/locale-service';
import { store } from '@core/store';

import '@common/styles/common.css';
import '@common/styles/style.scss';
import '@common/styles/style.styl';

let DevTools = null;

if (process.env.NODE_ENV === 'development') {
    DevTools = require('./dev-tools').DevTools;
}

LocaleService.IntlErrors();

window.onload = () => {
    const DevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ || window.devToolsExtension;

    ReactDOM.render(
        <Provider store={store}>
            <React.Fragment>
                <ConnectedIntlProvider>
                    <App/>
                </ConnectedIntlProvider>

                {DevTools && process.env.NODE_ENV === 'development' && !DevToolsExtension && <DevTools/>}
            </React.Fragment>
        </Provider>,
        document.getElementById('app')
    );
};
