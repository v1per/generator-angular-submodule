require("angular");
require("angular-mocks");
require("./index.js");

describe('<%= name %>', function () {
  beforeEach(angular.mock.module('<%= name %>'));

  describe('when it works', function () {
    it('should work!', function () {
      expect(true).toBe(true);
    });
  });

});
