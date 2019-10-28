/**
 * Gasper Dominus API
 * API specs for Gasper Dominus, the ecosystem's master. Handles authentication, creation/management of applications and databases and also provides a superuser API. The superuser API is only available for those user accounts which has `is_admin` set to `true` in the mongoDB database used by Gasper. Apart from that, a default superuser is created every time a Gasper instance is launched whose  credentials are defined in the `admin` section of `config.toml`, the main configuration file. A sample configuration file is available in the [Gasper GitHub Repository](https://github.com/sdslabs/gasper) under the name of `config.sample.toml`.<br><br> **Note:-** Normally the applications and databases can only be managed by their owners but the superuser can bypass that check.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: contact@sdslabs.co.in
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Database from '../model/Database';
import InlineResponse2003 from '../model/InlineResponse2003';
import InlineResponse2005 from '../model/InlineResponse2005';
import InlineResponse2006 from '../model/InlineResponse2006';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse401 from '../model/InlineResponse401';
import InlineResponse500 from '../model/InlineResponse500';

/**
* Dbs service.
* @module api/DbsApi
* @version 1.0
*/
export default class DbsApi {

    /**
    * Constructs a new DbsApi. 
    * @alias module:api/DbsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a database
     * @param {String} authorization Bearer Token Authentication
     * @param {module:model/String} databaseType The type of database
     * @param {Object} opts Optional parameters
     * @param {module:model/Database} opts.database 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    createDBWithHttpInfo(authorization, databaseType, opts) {
      opts = opts || {};
      let postBody = opts['database'];
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling createDB");
      }
      // verify the required parameter 'databaseType' is set
      if (databaseType === undefined || databaseType === null) {
        throw new Error("Missing the required parameter 'databaseType' when calling createDB");
      }

      let pathParams = {
        'databaseType': databaseType
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2005;
      return this.apiClient.callApi(
        '/dbs/{databaseType}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a database
     * @param {String} authorization Bearer Token Authentication
     * @param {module:model/String} databaseType The type of database
     * @param {Object} opts Optional parameters
     * @param {module:model/Database} opts.database 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */
    createDB(authorization, databaseType, opts) {
      return this.createDBWithHttpInfo(authorization, databaseType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a single database owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} db Name of the database
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    deleteDbByUserWithHttpInfo(authorization, db) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteDbByUser");
      }
      // verify the required parameter 'db' is set
      if (db === undefined || db === null) {
        throw new Error("Missing the required parameter 'db' when calling deleteDbByUser");
      }

      let pathParams = {
        'db': db
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/dbs/{db}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a single database owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} db Name of the database
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    deleteDbByUser(authorization, db) {
      return this.deleteDbByUserWithHttpInfo(authorization, db)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch a single database owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} db Name of the database
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
     */
    fetchDbByUserWithHttpInfo(authorization, db) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling fetchDbByUser");
      }
      // verify the required parameter 'db' is set
      if (db === undefined || db === null) {
        throw new Error("Missing the required parameter 'db' when calling fetchDbByUser");
      }

      let pathParams = {
        'db': db
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2006;
      return this.apiClient.callApi(
        '/dbs/{db}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch a single database owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} db Name of the database
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2006}
     */
    fetchDbByUser(authorization, db) {
      return this.fetchDbByUserWithHttpInfo(authorization, db)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch all databases owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
     */
    fetchDbsByUserWithHttpInfo(authorization) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling fetchDbsByUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2006;
      return this.apiClient.callApi(
        '/dbs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch all databases owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2006}
     */
    fetchDbsByUser(authorization) {
      return this.fetchDbsByUserWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
