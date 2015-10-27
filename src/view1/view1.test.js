import angular from 'angular';
import 'angular-mocks';

describe('controller: View1Ctrl', function() {

    var scope, $rootScope, $controller;

    beforeEach(angular.mock.module('myApp.view1'));


    beforeEach(inject(function(_$rootScope_, _$controller_){
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();

        $controller('View1Ctrl', {
            $scope: scope
        });
    }));


    it('should have initial todos', function() {

        expect(scope.greeting).toBe('Hello World!');

    });


});
