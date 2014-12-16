'use strict';

describe('Controller: EltiempoCtrl', function () {

  // load the controller's module
  beforeEach(module('braseroApp'));

  var EltiempoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EltiempoCtrl = $controller('EltiempoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
