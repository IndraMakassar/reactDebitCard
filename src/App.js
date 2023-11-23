import './App.css';
import RateButtons from "./rateButtons";
import CardFront from "./cardFront";

function App() {
    return (
        <div className={"p-8"}>
            <CardFront />
            <RateButtons />
        </div>
    );
}

export default App;
