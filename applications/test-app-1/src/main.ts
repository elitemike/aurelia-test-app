import { Aurelia } from 'aurelia-framework';
import environment from '../config/environment.json';
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.plugin(PLATFORM.moduleName('@packages/dep1'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');
  //aurelia.use.developmentLogging('debug');
  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
