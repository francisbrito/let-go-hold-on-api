/* eslint-disable func-names, no-use-before-define */

import co from 'co';
import test from 'blue-tape';
import createTestAgent from 'promisify-supertest';

import createApplication from '../src';

test('GET /', (sub) => {
  sub.test('responds with OK status code', co.wrap(function* (assert) {
    const app = setup();

    yield app
    .get('/')
    .expect(statusCodeToBeOk)
    .end();

    function statusCodeToBeOk({statusCode}) {
      const okStatusCode = 200;

      assert.equal(statusCode, okStatusCode, 'should be status OK');
    }
  }));

  sub.test('responds with JSON content type', co.wrap(function* (assert) {
    const fixture = setup();

    yield fixture
    .get('/')
    .expect(contentTypeToBeJson)
    .end();

    function contentTypeToBeJson({type}) {
      const expectedType = 'application/json';

      assert.equal(type, expectedType, 'should be application/json');
    }
  }));
  sub.test('responds with an object with `hold on` and `let go` keys',
  co.wrap(function* (assert) {
    const fixture = setup();

    yield fixture
    .get('/')
    .expect(bodyToBeTruthy)
    .expect(bodyToHaveKeys('hold on', 'let go'))
    .end();

    function bodyToBeTruthy({body}) {
      assert.ok(body, 'should be truthy');
    }

    function bodyToHaveKeys(...keys) {
      return function bodyToHaveKeysAssertion({body}) {
        keys.forEach((key) => {
          assert.ok(key in body, `should have key ${key}`);
        });
      };
    }
  }));
});

function setup() {
  const app = createApplication();

  return createTestAgent(app.callback());
}
