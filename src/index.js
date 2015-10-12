/**
 * External imports
 */
import route from 'koa-route';
import createDebugLogger from 'debug';
import createKoaApplication from 'koa';

// create debug logger
const log = createDebugLogger('lgho:root');

/**
 * Routes
 */
function* root() {
  this.response.body = {
    'let go': null,
    'hold on': null,
  };
  this.response.status = 200;
}

export default function create(options = {}) {
  log('options %j', options);

  return createKoaApplication()
  .use(route.get('/', root));
}
