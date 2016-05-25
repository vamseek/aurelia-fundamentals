import 'bootstrap';
import {DataCache} from 'dataCache';
import {PlugIn1} from 'plugin1';
import {PlugIn2} from 'plugin2';

export function configure(aurelia){
	let cache = new DataCache();
	cache.data.push('1');
	cache.data.push('2');
	cache.data.push('3');

	aurelia.use.transient('SuperPlugIn', PlugIn1);
	aurelia.use.transient('SuperPlugIn', PlugIn2);
	aurelia.use.instance('Cache', cache);
    aurelia.use.standardConfiguration().developmentLogging();
    aurelia.start().then(a => a.setRoot('shell'));
}
