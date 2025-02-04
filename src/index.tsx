/* @refresh reload */
import {render} from 'solid-js/web';

import './index.css';
import App from './app';
import {Router} from '@solidjs/router';
import {routes} from './routes';
import {CartProvider} from './context/CartContext';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

render(
    () =>
        <CartProvider>
            <Router root={(props) => <App>{props.children}</App>}>
                {routes}
            </Router>
        </CartProvider>,
    root!,
);
