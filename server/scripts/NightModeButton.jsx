const { h, Component } = require('preact');

class NightModeButton extends Component {
  constructor() {
    super();
  }

  render() {
    return <button id="nightmodebutton" onClick={() => console.log('hello')}>HELLO</button>;
  }
}