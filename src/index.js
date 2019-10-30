/**
 * Gasper Dominus API
 * API documentation for Gasper Dominus, the ecosystem's master. Handles authentication, creation/management of applications, databases, users and also provides a superuser API. <br><br> Only a superuser can avail the superuser API. A superuser can **grant/revoke** superuser privileges to other users. A default  superuser is created every time a Gasper instance is launched whose credentials are defined in the `admin` section of `config.toml`, the main configuration file. A sample configuration file is available in the [Gasper GitHub Repository](https://github.com/sdslabs/gasper)  under the name of `config.sample.toml`.<br><br> **Note:-** Normally the applications and databases can only be managed by their owners but the superuser can bypass that check.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: contact@sdslabs.co.in
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Application from './model/Application';
import Context from './model/Context';
import CreatedApplication from './model/CreatedApplication';
import CreatedDatabase from './model/CreatedDatabase';
import CreatedUser from './model/CreatedUser';
import Database from './model/Database';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2001Resources from './model/InlineResponse2001Resources';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2005 from './model/InlineResponse2005';
import InlineResponse2006 from './model/InlineResponse2006';
import InlineResponse2007 from './model/InlineResponse2007';
import InlineResponse2008 from './model/InlineResponse2008';
import InlineResponse2009 from './model/InlineResponse2009';
import InlineResponse400 from './model/InlineResponse400';
import InlineResponse401 from './model/InlineResponse401';
import InlineResponse500 from './model/InlineResponse500';
import Login from './model/Login';
import LoginResponse from './model/LoginResponse';
import User from './model/User';
import AdminApi from './api/AdminApi';
import AppsApi from './api/AppsApi';
import AuthApi from './api/AuthApi';
import DbsApi from './api/DbsApi';


/**
* API_documentation_for_Gasper_Dominus_the_ecosystems_master__Handles_authentication_creation_management_of_applications_databases_users_and_also_provides_a_superuser_API__brbr_Only_a_superuser_can_avail_the_superuser_API__A_superuser_can_grant_revoke_superuser_privileges_to_other_users__A_default__superuser_is_created_every_time_a_Gasper_instance_is_launched_whose_credentials_are_defined_in_the_admin_section_of_config_toml_the_main_configuration_file__A_sample_configuration_file_is_available_in_the__Gasper_GitHub_Repository_https__github_com_sdslabs_gasper__under_the_name_of_config_sample_toml_brbrNote__Normally_the_applications_and_databases_can_only_be_managed_by_their_owners_but_the_superuser_can_bypass_that_check_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GasperDominusApi = require('index'); // See note below*.
* var xxxSvc = new GasperDominusApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GasperDominusApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GasperDominusApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GasperDominusApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Application model constructor.
     * @property {module:model/Application}
     */
    Application,

    /**
     * The Context model constructor.
     * @property {module:model/Context}
     */
    Context,

    /**
     * The CreatedApplication model constructor.
     * @property {module:model/CreatedApplication}
     */
    CreatedApplication,

    /**
     * The CreatedDatabase model constructor.
     * @property {module:model/CreatedDatabase}
     */
    CreatedDatabase,

    /**
     * The CreatedUser model constructor.
     * @property {module:model/CreatedUser}
     */
    CreatedUser,

    /**
     * The Database model constructor.
     * @property {module:model/Database}
     */
    Database,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2001Resources model constructor.
     * @property {module:model/InlineResponse2001Resources}
     */
    InlineResponse2001Resources,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007,

    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008,

    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009,

    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400,

    /**
     * The InlineResponse401 model constructor.
     * @property {module:model/InlineResponse401}
     */
    InlineResponse401,

    /**
     * The InlineResponse500 model constructor.
     * @property {module:model/InlineResponse500}
     */
    InlineResponse500,

    /**
     * The Login model constructor.
     * @property {module:model/Login}
     */
    Login,

    /**
     * The LoginResponse model constructor.
     * @property {module:model/LoginResponse}
     */
    LoginResponse,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The AdminApi service constructor.
    * @property {module:api/AdminApi}
    */
    AdminApi,

    /**
    * The AppsApi service constructor.
    * @property {module:api/AppsApi}
    */
    AppsApi,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The DbsApi service constructor.
    * @property {module:api/DbsApi}
    */
    DbsApi
};
