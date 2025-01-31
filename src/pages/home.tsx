import Card from "../components/Card";

export default function Home() {
    return (
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
    )
};