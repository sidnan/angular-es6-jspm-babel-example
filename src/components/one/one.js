class OneDirective {

    /*@ngInject*/
    constructor() {
        this.template = '<h1>this is just the beginning...</h1>';
        this.restrict = 'AE';
        this.scope = {};
    }

    link(scope, element, attributes) {
        console.log("directive link");
    }

    static directiveFactory(){
        OneDirective.instance = new OneDirective();
        return OneDirective.instance;
    }
}

export { OneDirective }
