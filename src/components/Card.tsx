import {JSX} from "solid-js/jsx-runtime";

export default function Card(props: {
    rounded: any;
    flat: any;
    children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined;
}) {
    return (
        <div
            class="bg-white p-4 text-center"
            classList={{"rounded-md": props.rounded, "shadow-md": !props.flat}}
        >
            {props.children}
        </div>
    )
}