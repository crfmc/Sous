const { h, Fragment } = require('preact');
const render = require('preact-render-to-string');
/** @jsx h */

// import Inventory from "inventory"


// const App = () => {
//     return (
//         <button>
//             Hello world! Let's get started
//         </button>
//     )
// }

const Client = () => {
    return (
        <div>
            Hi there! I'm Sous.
        </div>
    )
}

module.exports.client = render(<Client />);