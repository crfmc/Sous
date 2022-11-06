import { h, Component } from 'preact';

export default class App2 extends Component {
  constructor() {
    super();
    this.name = "APP2";
  }

  render() {
    return <button onClick={() => {console.log('App2 clicked')}}>{this.name}</button>;
  }
}