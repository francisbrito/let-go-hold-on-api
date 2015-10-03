/**
 * External imports
 */
import koa from 'koa';
import libdebug from 'debug';

// create debug logger
const debug = libdebug('lgho:root');

export default function create(options = {}) {
  debug('options %j', options);

  return koa();
}
