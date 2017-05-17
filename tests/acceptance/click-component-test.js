import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';
/* global clickComponent, expectComponent */

moduleForAcceptance('Acceptance | click component');

test('clickComponent() API test', function(assert) {
  assert.expect(3);
  visit('/click-component');

  let beforeClickText = 'CLICK IT!!!';
  let afterClickText  = 'Good Job';

  andThen(() => {
    expectComponent(assert, 'click-component', 1);
    assert.equal(find('.txt').text().trim(), beforeClickText);
    clickComponent('click-component', '.btn');

    andThen(() => {
      assert.equal(find('.txt').text().trim(), afterClickText);
    });
  });
});
