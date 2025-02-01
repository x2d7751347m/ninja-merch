import {lazy} from 'solid-js';
import type {RouteDefinition} from '@solidjs/router';

import Home from './pages/Home';
import Cart from "./pages/Cart";
import NotFound from "./errors/404";

export const routes: RouteDefinition[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '**',
        component: NotFound,
    },
];
