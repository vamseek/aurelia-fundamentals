import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';

@inject(DataRepository)
export class EventDetail {
    constructor(dataRepository){
        this.dataRepository = dataRepository;
    }

    activate(params, routeConfig, navigationInstruction){
        let eventId = parseInt(params.eventId);
        this.event = this.dataRepository.getEvent(eventId);
        console.log(`activate called with eventId=${eventId}`);
        if(!this.event){
            console.log(`event is not defined`);
        }
        console.log(`event.title = ${event.title}`);
    }
}
