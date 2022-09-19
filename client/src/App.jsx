import { h, Component, hydrate } from 'preact';
import App2 from './components/App2';

const App = () => {
    return (
        <App2 />
    )
}

// Does (nearly) no diffing, only attaches events
hydrate(<App />, document.getElementById("root"));
