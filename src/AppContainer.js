import React, { Component } from 'react'
import { Provider } from 'react-redux';
import App from 'App';
import store from 'store/store';

class AppContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}