import {getContext} from '../utils/helper-context';
import expectElement from './expect-element';

export default function(app, selector, options, message){
  if (!options) {
    options = {};
  }

  return expectElement(app, selector, 0, options);
}
