import { h, Fragment } from 'preact';
/** @jsx h */

// import Inventory from "inventory"

// const { App2 } = require('./components/App2');


export const App = () => {
    return (
        <Fragment>
            Hi there, I'm Sous.
            <button onClick={() => console.log('test11!!!!')}>Server stuff here!</button>
            {/* <App2 /> */}
        </Fragment>
    )
}
