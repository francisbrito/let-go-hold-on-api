/**
 * External imports
 */
import koa from 'koa';
import route from 'koa-route';
import libdebug from 'debug';

// create debug logger
const debug = libdebug('lgho:root');

/**
 * Routes
 */
function* root() {
  this.response.status = 200;
}

export default function create(options = {}) {
  debug('options %j', options);

  return koa()
  .use(route.get('/', root));
}
