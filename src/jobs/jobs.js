export class Jobs{
    constructor(){
    }

    canActivate(params, routeConfig, navigationInstruction){
        let promise = new Promise((resolve, reject) => {
            setTimeout(_ => {
                resolve(false);
                // reject('failed');
            }, 2000);
        });
        return promise;
    }
}
