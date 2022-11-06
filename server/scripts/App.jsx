import { h, Fragment } from 'preact';
/** @jsx h */

// import Inventory from "inventory"

import App2 from './components/App2';
import NightModeButton from './components/NightModeButton';

import 'preact/debug';
import { useState } from 'preact/hooks/src';

const greeting = "Hi there, I'm Sous.";

// const [cGreet, setCGreet] = useState()

console.log(useState());

export const App = () => {
    return (
        <div>
            { greeting }
            <button onClick={() => console.log('This is working alright!!!!')}>Click me!</button>
            <App2 />
        </div>
    )
}
