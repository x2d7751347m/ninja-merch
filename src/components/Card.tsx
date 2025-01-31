import {JSX} from "solid-js/jsx-runtime";

export default function Card({
                                 rounded = false,
                                 flat = false,
                                 children
                             }: {
    rounded?: boolean;
    flat?: boolean;
    children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined;
}) {
    return (
        <div
            class="bg-white p-4 text-center"
            classList={{"rounded-md": rounded, "shadow-md": !flat}}
        >
            {children}
        </div>
    )
}