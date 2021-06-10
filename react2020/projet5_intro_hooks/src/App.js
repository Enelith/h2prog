import Part102UseState from 'containers/Part102UseState/Part102UseState';
import Part103UseStateObjects from 'containers/Part103UseStateObjects/Part103UseStateObjects';
import Part104UseEffect from 'containers/Part104UseEffect/Part104UseEffect';

function App() {
    return (
        <div className="App">
            <h4>Part 102 - useState</h4>
            <Part102UseState />
            <hr />
            <h4>Part 103 - useState & Objects</h4>
            <Part103UseStateObjects />
            <hr />
            <h4>Part 104 - useEffect</h4>
            <Part104UseEffect />
        </div>
    );
}

export default App;
