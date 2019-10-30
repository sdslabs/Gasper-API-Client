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

import ApiClient from '../ApiClient';

/**
 * The LoginResponse model module.
 * @module model/LoginResponse
 * @version 1.0
 */
class LoginResponse {
    /**
     * Constructs a new <code>LoginResponse</code>.
     * @alias module:model/LoginResponse
     */
    constructor() { 
        
        LoginResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoginResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginResponse} obj Optional instance to populate.
     * @return {module:model/LoginResponse} The populated <code>LoginResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginResponse();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('expire')) {
                obj['expire'] = ApiClient.convertToType(data['expire'], 'Date');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }

/**
     * @return {Number}
     */
    getCode() {
        return this.code;
    }

    /**
     * @param {Number} code
     */
    setCode(code) {
        this['code'] = code;
    }
/**
     * @return {Date}
     */
    getExpire() {
        return this.expire;
    }

    /**
     * @param {Date} expire
     */
    setExpire(expire) {
        this['expire'] = expire;
    }
/**
     * Returns The token required for authentication via bearer scheme
     * @return {String}
     */
    getToken() {
        return this.token;
    }

    /**
     * Sets The token required for authentication via bearer scheme
     * @param {String} token The token required for authentication via bearer scheme
     */
    setToken(token) {
        this['token'] = token;
    }

}

/**
 * @member {Number} code
 */
LoginResponse.prototype['code'] = undefined;

/**
 * @member {Date} expire
 */
LoginResponse.prototype['expire'] = undefined;

/**
 * The token required for authentication via bearer scheme
 * @member {String} token
 */
LoginResponse.prototype['token'] = undefined;






export default LoginResponse;

