/**
 * Gasper Kaze API
 * Handles authentication, creation/management of applications, databases, users and also provides a superuser API. <br><br> Only a superuser can avail the superuser API. A superuser can **grant/revoke** superuser privileges to other users. A default  superuser is created every time a Gasper instance is launched whose credentials are defined in the `admin` section of `config.toml`, the main configuration file. A sample configuration file is available [here](https://github.com/sdslabs/gasper/blob/develop/config.sample.toml#L37).<br><br> **Note:-** Normally the applications and databases can only be managed by their owners but the superuser can bypass that check.<br><br> **PS:-** If you want to programmatically generate a client for this API, you can find the corresponding OpenAPI specifications [here](https://github.com/sdslabs/gasper/tree/develop/docs/content/api/specs). We recommend using [OpenAPI-Generator](https://openapi-generator.tech/) for generating clients.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: contact@sdslabs.co.in
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GasperKazeApi);
  }
}(this, function(expect, GasperKazeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GasperKazeApi.InlineResponse20013();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse20013', function() {
    it('should create an instance of InlineResponse20013', function() {
      // uncomment below and update the code to test InlineResponse20013
      //var instane = new GasperKazeApi.InlineResponse20013();
      //expect(instance).to.be.a(GasperKazeApi.InlineResponse20013);
    });

    it('should have the property success (base name: "success")', function() {
      // uncomment below and update the code to test the property success
      //var instane = new GasperKazeApi.InlineResponse20013();
      //expect(instance).to.be();
    });

    it('should have the property kaze (base name: "kaze")', function() {
      // uncomment below and update the code to test the property kaze
      //var instane = new GasperKazeApi.InlineResponse20013();
      //expect(instance).to.be();
    });

    it('should have the property enrai (base name: "enrai")', function() {
      // uncomment below and update the code to test the property enrai
      //var instane = new GasperKazeApi.InlineResponse20013();
      //expect(instance).to.be();
    });

    it('should have the property hikari (base name: "hikari")', function() {
      // uncomment below and update the code to test the property hikari
      //var instane = new GasperKazeApi.InlineResponse20013();
      //expect(instance).to.be();
    });

    it('should have the property mizu (base name: "mizu")', function() {
      // uncomment below and update the code to test the property mizu
      //var instane = new GasperKazeApi.InlineResponse20013();
      //expect(instance).to.be();
    });

    it('should have the property mongodb (base name: "mongodb")', function() {
      // uncomment below and update the code to test the property mongodb
      //var instane = new GasperKazeApi.InlineResponse20013();
      //expect(instance).to.be();
    });

    it('should have the property mysql (base name: "mysql")', function() {
      // uncomment below and update the code to test the property mysql
      //var instane = new GasperKazeApi.InlineResponse20013();
      //expect(instance).to.be();
    });

    it('should have the property iwa (base name: "iwa")', function() {
      // uncomment below and update the code to test the property iwa
      //var instane = new GasperKazeApi.InlineResponse20013();
      //expect(instance).to.be();
    });

  });

}));
