console.log('hello!');

import { h, render } from 'preact';
// Tells babel to use h for JSX. It's better to configure this globally.
// See https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#usage
// In tsconfig you can specify this with the jsxFactory
/** @jsx h */

// import Inventory from "inventory"


const App = () => {
    return(
        <button>
            Hello world! Let's get started
        </button>
    )
}

render(<App />, document.body);