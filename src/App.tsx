import {Component, createSignal} from 'solid-js';
import banner from './assets/banner.png'
import {Router, Route, A} from "@solidjs/router";
import Home from "./pages/home";
import Cart from "./pages/cart";

const App: Component = () => {
    const [darkTheme, setDarkTheme] = createSignal(false)

    function toggleTheme() {
        setDarkTheme(!darkTheme())
    }

    return (
        <div class="container m-auto">
            <header
                class="my-4 p-2 text-xl flex items-center gap-4"
                classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme()}}
            >
                <span
                    class="material-symbols-outlined cursor-pointer"
                    onClick={toggleTheme}
                >
                    light_mode
                </span>
                <h1>Ninja Merch</h1>

                <A href="/">Home</A>
                <A href="/cart">Cart</A>
            </header>

            <img class="rounded-md" src={banner} alt="site banner"/>

            <Router>
                <Route path="/" component={Home}></Route>
                <Route path="/cart" component={Cart}></Route>
            </Router>

        </div>
    );
};

export default App;
