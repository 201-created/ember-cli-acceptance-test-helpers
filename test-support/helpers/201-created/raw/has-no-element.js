import {getContext} from '../utils/helper-context';
import hasElement from './has-element';

export default function(app, assert, selector, options, message){
  if (!options) {
    options = {};
  }

  return hasElement(app, assert, selector, 0, options);
}
