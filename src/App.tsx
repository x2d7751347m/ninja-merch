import {Component, createSignal} from 'solid-js';
import banner from './assets/banner.png'
import Card from "./components/Card";

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
            </header>

            <img class="rounded-md" src={banner} alt="site banner"/>

            <div class="grid grid-cols-4 gap-10 my-4">
                {/*<Card title="ninja tee"/>*/}
                <Card rounded={true} flat={false}>
                    <h2>Ninja Tee, Black</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni nostrum perferendis sit ut
                        vitae!</p>
                    <button class="btn">view</button>
                </Card>
                <Card rounded={false} flat={true}>
                    <h2>Ninja Tee, White</h2>
                    <button class="btn">view</button>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni nostrum perferendis sit ut
                        vitae!</p>
                    <p>Only $10</p>
                </Card>
            </div>
        </div>
    );
};

export default App;
