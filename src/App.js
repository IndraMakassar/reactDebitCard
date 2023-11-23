import './App.css';
import RateButtons from "./rateButtons";
import CardFront from "./cardFront";
import CardBack from "./cardBack";

function App() {
    return (
        <div className={"p-8"}>
            <CardFront />
            <CardBack />
            <RateButtons />
        </div>
    );
}

export default App;
