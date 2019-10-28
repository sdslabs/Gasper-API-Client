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

import ApiClient from '../ApiClient';

/**
 * The CreatedUser model module.
 * @module model/CreatedUser
 * @version 1.0
 */
class CreatedUser {
    /**
     * Constructs a new <code>CreatedUser</code>.
     * @alias module:model/CreatedUser
     */
    constructor() { 
        
        CreatedUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatedUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatedUser} obj Optional instance to populate.
     * @return {module:model/CreatedUser} The populated <code>CreatedUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatedUser();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('is_admin')) {
                obj['is_admin'] = ApiClient.convertToType(data['is_admin'], 'Boolean');
            }
            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
        }
        return obj;
    }

/**
     * @return {String}
     */
    getUsername() {
        return this.username;
    }

    /**
     * @param {String} username
     */
    setUsername(username) {
        this['username'] = username;
    }
/**
     * @return {String}
     */
    getEmail() {
        return this.email;
    }

    /**
     * @param {String} email
     */
    setEmail(email) {
        this['email'] = email;
    }
/**
     * Returns Field denoting superuser privileges
     * @return {Boolean}
     */
    getIsAdmin() {
        return this.is_admin;
    }

    /**
     * Sets Field denoting superuser privileges
     * @param {Boolean} isAdmin Field denoting superuser privileges
     */
    setIsAdmin(isAdmin) {
        this['is_admin'] = isAdmin;
    }
/**
     * Returns User's identifier assigned by MongoDB
     * @return {String}
     */
    getId() {
        return this._id;
    }

    /**
     * Sets User's identifier assigned by MongoDB
     * @param {String} id User's identifier assigned by MongoDB
     */
    setId(id) {
        this['_id'] = id;
    }

}

/**
 * @member {String} username
 */
CreatedUser.prototype['username'] = undefined;

/**
 * @member {String} email
 */
CreatedUser.prototype['email'] = undefined;

/**
 * Field denoting superuser privileges
 * @member {Boolean} is_admin
 */
CreatedUser.prototype['is_admin'] = undefined;

/**
 * User's identifier assigned by MongoDB
 * @member {String} _id
 */
CreatedUser.prototype['_id'] = undefined;






export default CreatedUser;

