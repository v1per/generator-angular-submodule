(function () {
  "use strict";

  var moduleName = '<%= name %>';

  angular
    .module(moduleName, []);

    // Your code goes here

  if (typeof module !== 'undefined') {
    module.exports = moduleName;
  }

}());
