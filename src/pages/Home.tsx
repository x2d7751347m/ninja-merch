import {A} from "@solidjs/router";
import Card from "../components/Card";
import {createResource, For, Show} from "solid-js";
import {fetchProducts} from "../lib/api";

export default function Home() {
    const [products] = createResource(fetchProducts)
    return (
        <Show when={products()} fallback={<p>Loading...</p>}>
            <div class="grid grid-cols-4 gap-10 my-4">
                <For each={products()}>
                    {(product) => (
                        <Card rounded={true} flat={true}>
                            <img src={product.img} alt="product image"/>
                            <h1 class="my-3 font-bold">{product.title}</h1>
                            <A href={`/product/${product.id}`} class="btn">View Product</A>
                        </Card>
                    )}
                </For>
            </div>
        </Show>
    )
};