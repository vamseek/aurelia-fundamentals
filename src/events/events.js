import {inject, Lazy, All} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import {Router} from 'aurelia-router';

@inject(DataRepository, Router)
export class EventsList {
    constructor(dataRepository, router){
        this.dataRepository = dataRepository;
        this.router = router;
        if(!router){
            throw 'router must be injected';
        }
    }

    activate(params, routeConfig, navigationInstruction){
        return this.dataRepository.getEvents().then(events => {
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
}
