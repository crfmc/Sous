const { h, Fragment } = require('preact');
const render = require('preact-render-to-string');
/** @jsx h */

// import Inventory from "inventory"

const { App2 } = require('./components/App2');


const Client = () => {
    return (
        <div>
            Hi there! I'm Sous.
            <App2 />
        </div>
    )
}

module.exports.client = render(<Client />);