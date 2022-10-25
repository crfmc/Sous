/**
 * Hydrates the components in the DOM by running a parallel App
 * component.
*/
import { hydrate, h } from 'preact';
import { App } from '../public/js/AppClient';

hydrate(<App />, document.getElementById("root"));