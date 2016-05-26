import {inject, Lazy, All} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import {Router} from 'aurelia-router';

@inject(DataRepository, Router)
export class Events {
    constructor(dataRepository, router){
        dataRepository.getEvents().then(events => {
            this.events = events;
            this.events.forEach(item => {
                item.detailUrl = router.generate('eventDetail', { eventId: item.id });
            });
        });
    }

    activate(params, routeConfig, navigationInstruction){
    }

    createAndUseLazy() {
        console.log('about to use lazy');
        this.lazyOfImLazy().doStuff();
        console.log('again...');
        this.lazyOfImLazy().doStuff();
    }
}
