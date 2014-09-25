import expectElement from './expectations/expect-element';
import expectComponent from './expectations/expect-component';
import expectView from './expectations/expect-view';

export default function(){
  expectElement();
  expectComponent();
  expectView();
}
