import {inject, Lazy, All} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import {Router, activationStrategy} from 'aurelia-router';

@inject(DataRepository, Router)
export class EventsList {
    constructor(dataRepository, router){
        this.dataRepository = dataRepository;
        this.router = router;
        if(!router){
            throw 'router must be injected';
        }

        console.log('EventsList: ctor');
    }

    activate(params, routeConfig, navigationInstruction){
        let pastOrFuture = routeConfig.name == '' ? 'future': routeConfig.name;
        console.log(`activate: ${pastOrFuture}`);
        return this.dataRepository.getEvents(pastOrFuture).then(events => {
            if(params.speaker || params.topic){
                var filteredResults = [];
                let speaker = params.speaker && params.speaker.toLowerCase();
                let topic = params.topic && params.topic.toLowerCase();
                events.forEach(item => {
                    if(speaker && item.speaker.toLowerCase().indexOf(speaker) >= 0){
                        filteredResults.push(item);
                    } else if(topic && item.topic.toLowerCase().indexOf(topic) >= 0){
                        filteredResults.push(item);
                    }
                });
                this.events = filteredResults;
            } else {
                this.events = events;
            }
            this.events.forEach(item => {
                item.detailUrl = this.router.generate('eventDetail', { eventId: item.id });
            });
        });
    }

    goToDiscussion(){
        this.router.navigate('#/discussion');
    }

    createAndUseLazy() {
        console.log('about to use lazy');
        this.lazyOfImLazy().doStuff();
        console.log('again...');
        this.lazyOfImLazy().doStuff();
    }

    canActivate() {
        console.log('EventsList: canActivate');
        return true;
    }

    canDeactivate() {
        console.log('EventsList: canDeactivate');
        return true;
    }

    deactivate(){
        console.log('EventsList: deactivate');
    }

    determineActivationStrategy(){
        console.log('EventsList: determineActivationStrategy');
        return activationStrategy.invokeLifecycle;
    }
}
