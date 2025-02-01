import {lazy} from 'solid-js';
import type {RouteDefinition} from '@solidjs/router';

import Home from './pages/home';
import Cart from "./pages/cart";
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
