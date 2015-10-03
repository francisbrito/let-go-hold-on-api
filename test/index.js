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
    .expect((response) => {
      assert.equal(response.statusCode, 200, 'status code should be 200');
    })
    .end();
  }));
});
