/* eslint-disable func-names, no-use-before-define */

import co from 'co';
import test from 'blue-tape';
import agent from 'promisify-supertest';

import createApplication from '../src';

const setup = () => {
  return agent(createApplication().callback());
};

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
});
