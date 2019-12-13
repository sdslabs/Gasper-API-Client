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
    instance = new GasperKazeApi.InlineResponse2007();
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

  describe('InlineResponse2007', function() {
    it('should create an instance of InlineResponse2007', function() {
      // uncomment below and update the code to test InlineResponse2007
      //var instane = new GasperKazeApi.InlineResponse2007();
      //expect(instance).to.be.a(GasperKazeApi.InlineResponse2007);
    });

    it('should have the property success (base name: "success")', function() {
      // uncomment below and update the code to test the property success
      //var instane = new GasperKazeApi.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new GasperKazeApi.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new GasperKazeApi.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new GasperKazeApi.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new GasperKazeApi.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property dbUrl (base name: "db_url")', function() {
      // uncomment below and update the code to test the property dbUrl
      //var instane = new GasperKazeApi.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property hostIp (base name: "host_ip")', function() {
      // uncomment below and update the code to test the property hostIp
      //var instane = new GasperKazeApi.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instane = new GasperKazeApi.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property instanceType (base name: "instance_type")', function() {
      // uncomment below and update the code to test the property instanceType
      //var instane = new GasperKazeApi.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instane = new GasperKazeApi.InlineResponse2007();
      //expect(instance).to.be();
    });

  });

}));
