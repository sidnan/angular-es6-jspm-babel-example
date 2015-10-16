class OneDirective {

    /*@ngInject*/
    constructor($q) {
        this.template = '<h1>this is just the beginning...</h1>';
        this.restrict = 'AE';
        this.$q = $q;        
        this.scope = {};
    }

    link(scope, element, attributes) {
        console.log("directive link");
    }

    static directiveFactory($q){
        OneDirective.instance = new OneDirective($q);
        return OneDirective.instance;
    }
}

export { OneDirective }
