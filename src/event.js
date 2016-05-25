import {DataCache} from 'dataCache';
import {inject} from 'aurelia-framework';

@inject(DataCache)
export class Event {
    constructor(dataCache) {
        this.cache = dataCache;
        dataCache.data.push('b');
    }

    activate(bindingContext){
        this.item = bindingContext;
    }
}
