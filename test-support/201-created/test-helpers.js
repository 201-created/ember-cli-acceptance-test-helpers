import expectElement from './expectations/expect-element';
import expectNoElement from './expectations/expect-no-element';
import expectComponent from './expectations/expect-component';
import expectView from './expectations/expect-view';

export default function(){
  expectElement();
  expectNoElement();
  expectComponent();
  expectView();
}
