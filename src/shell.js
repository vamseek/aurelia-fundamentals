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
                viewPorts: {
                    mainContent: {moduleId: 'events/events'},
                    sideBar: {moduleId: 'sideBar/sponsors'}
                },
                name: 'Events',
                title: 'Events listing', nav: true
            },
            {
                route: 'jobs',
                viewPorts: {
                    mainContent: {moduleId: 'jobs/jobs'},
                    sideBar: {moduleId: 'sideBar/sponsors'}
                }
                , title: 'Jobs listing', nav: true
            },  {
                route: 'discussion',
                viewPorts: {
                    mainContent: {moduleId: 'discussion/discussion'},
                    sideBar: {moduleId: 'sideBar/ads'}
                }
                , title: 'Discussion', nav: true
            }, {
                route: 'eventDetail/:eventId',
                viewPorts: {
                    mainContent: {moduleId: 'events/eventDetail'},
                    sideBar: {moduleId: 'sideBar/ads'}
                }
                , name: 'eventDetail'
            }
        ]);

    }
}
