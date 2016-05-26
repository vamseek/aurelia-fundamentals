export class Shell {
	constructor(){

	}

    configureRouter(config, router){
        this.router = router;
        // the title is displayed in the browser title bar
        config.title = 'This is the shell!';
        config.map([
            {
                route: ['', 'events'],
                moduleId: 'events/events', name: 'Events',
                title: 'Events listing', nav: true
            },
            {
                route: ['sponsors'],
                moduleId: 'sponsors/sponsors'
            }, {
                route: 'jobs', moduleId: 'jobs/jobs'
                , title: 'Jobs listing', nav: true
            },  {
                route: 'discussion', moduleId: 'discussion/discussion'
                , title: 'Discussion', nav: true
            }, {
                route: 'eventDetail/:eventId', moduleId: 'events/eventDetail'
                , name: 'eventDetail'
            }
        ]);

    }
}
