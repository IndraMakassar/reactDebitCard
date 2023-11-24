import './App.css';
import RateButtons from "./rateButtons";
import CardFront from "./cardFront";
import CardBack from "./cardBack";

function App() {
    return (
        <div className={"p-8"}>
            <div className={"aspect-[1.586] w-96"}>
            <CardBack />
            <CardFront />
            </div>
            <div className={"mt-5"}>
            <RateButtons />
            </div>
        </div>
    );
}

export default App;
