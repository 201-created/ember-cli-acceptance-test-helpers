import {getContext} from '../utils/helper-context';
import expectElement from './expect-element';

export default function(app, assert, selector, options, message){
  if (!options) {
    options = {};
  }

  return expectElement(app, assert, selector, 0, options);
}
