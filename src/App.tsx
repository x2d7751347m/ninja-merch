import {type Component, createSignal, Suspense} from 'solid-js';
import banner from './assets/banner.png'
import {A} from "@solidjs/router";

// @ts-ignore
const App: Component = (props: { children: Element }) => {
    const [darkTheme, setDarkTheme] = createSignal(false)

    function toggleTheme() {
        setDarkTheme(!darkTheme())
    }

    return (
        <>
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

                <main>
                    <Suspense>{props.children}</Suspense>
                </main>
            </div>
        </>
    );
};

export default App;
