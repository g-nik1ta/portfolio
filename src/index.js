import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from 'store';
import i18n from './i18n'; // Путь к вашему файлу i18n.js
import { I18nextProvider } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <App />
        </Provider>
    </I18nextProvider>
);