'use strict';

describe('Filter: myFilterDate', function () {

  // load the filter's module
  beforeEach(module('uiApp'));

  // initialize a new instance of the filter before each test
  var myFilterDate;
  beforeEach(inject(function ($filter) {
    myFilterDate = $filter('myFilterDate');
  }));

  it('should return the input prefixed with "myFilterDate filter:"', function () {
    var text = 'angularjs';
    expect(myFilterDate(text)).toBe('myFilterDate filter: ' + text);
  });

});
