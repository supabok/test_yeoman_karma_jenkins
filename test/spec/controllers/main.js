'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('yoAngularTestApp'));

    var MainCtrl,
        scope;//we're using scope for the tests

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.randomStrings.length).toBe(3);
    });

    it('should say "hello world"', function() {
        expect(scope.text).toBe('Hello World');
    })
});
