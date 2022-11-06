import { h, Component } from 'preact';

export default class NightModeButton extends Component {
  constructor() {
    super();
  }

  render(props) {
    return <button id="nightmodebutton" onClick={() => console.log('nightmode toggled')}>HELLO</button>;
  }
}