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
 * The CreatedDatabase model module.
 * @module model/CreatedDatabase
 * @version 1.0
 */
class CreatedDatabase {
    /**
     * Constructs a new <code>CreatedDatabase</code>.
     * @alias module:model/CreatedDatabase
     */
    constructor() { 
        
        CreatedDatabase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatedDatabase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatedDatabase} obj Optional instance to populate.
     * @return {module:model/CreatedDatabase} The populated <code>CreatedDatabase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatedDatabase();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('host_ip')) {
                obj['host_ip'] = ApiClient.convertToType(data['host_ip'], 'String');
            }
            if (data.hasOwnProperty('container_port')) {
                obj['container_port'] = ApiClient.convertToType(data['container_port'], 'String');
            }
            if (data.hasOwnProperty('instance_type')) {
                obj['instance_type'] = ApiClient.convertToType(data['instance_type'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns Name of the database
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets Name of the database
     * @param {String} name Name of the database
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns Password of the database
     * @return {String}
     */
    getPassword() {
        return this.password;
    }

    /**
     * Sets Password of the database
     * @param {String} password Password of the database
     */
    setPassword(password) {
        this['password'] = password;
    }
/**
     * Returns Username of the database
     * @return {String}
     */
    getUser() {
        return this.user;
    }

    /**
     * Sets Username of the database
     * @param {String} user Username of the database
     */
    setUser(user) {
        this['user'] = user;
    }
/**
     * Returns Owner of the database
     * @return {String}
     */
    getOwner() {
        return this.owner;
    }

    /**
     * Sets Owner of the database
     * @param {String} owner Owner of the database
     */
    setOwner(owner) {
        this['owner'] = owner;
    }
/**
     * Returns IPv4 address of the database
     * @return {String}
     */
    getHostIp() {
        return this.host_ip;
    }

    /**
     * Sets IPv4 address of the database
     * @param {String} hostIp IPv4 address of the database
     */
    setHostIp(hostIp) {
        this['host_ip'] = hostIp;
    }
/**
     * Returns Port on which the database server is running
     * @return {String}
     */
    getContainerPort() {
        return this.container_port;
    }

    /**
     * Sets Port on which the database server is running
     * @param {String} containerPort Port on which the database server is running
     */
    setContainerPort(containerPort) {
        this['container_port'] = containerPort;
    }
/**
     * Returns The kind of instance the database belongs to
     * @return {String}
     */
    getInstanceType() {
        return this.instance_type;
    }

    /**
     * Sets The kind of instance the database belongs to
     * @param {String} instanceType The kind of instance the database belongs to
     */
    setInstanceType(instanceType) {
        this['instance_type'] = instanceType;
    }
/**
     * Returns The type of database
     * @return {module:model/CreatedDatabase.LanguageEnum}
     */
    getLanguage() {
        return this.language;
    }

    /**
     * Sets The type of database
     * @param {module:model/CreatedDatabase.LanguageEnum} language The type of database
     */
    setLanguage(language) {
        this['language'] = language;
    }

}

/**
 * Name of the database
 * @member {String} name
 */
CreatedDatabase.prototype['name'] = undefined;

/**
 * Password of the database
 * @member {String} password
 */
CreatedDatabase.prototype['password'] = undefined;

/**
 * Username of the database
 * @member {String} user
 */
CreatedDatabase.prototype['user'] = undefined;

/**
 * Owner of the database
 * @member {String} owner
 */
CreatedDatabase.prototype['owner'] = undefined;

/**
 * IPv4 address of the database
 * @member {String} host_ip
 */
CreatedDatabase.prototype['host_ip'] = undefined;

/**
 * Port on which the database server is running
 * @member {String} container_port
 */
CreatedDatabase.prototype['container_port'] = undefined;

/**
 * The kind of instance the database belongs to
 * @member {String} instance_type
 */
CreatedDatabase.prototype['instance_type'] = undefined;

/**
 * The type of database
 * @member {module:model/CreatedDatabase.LanguageEnum} language
 */
CreatedDatabase.prototype['language'] = undefined;





/**
 * Allowed values for the <code>language</code> property.
 * @enum {String}
 * @readonly
 */
CreatedDatabase['LanguageEnum'] = {

    /**
     * value: "mysql"
     * @const
     */
    "mysql": "mysql",

    /**
     * value: "mongodb"
     * @const
     */
    "mongodb": "mongodb"
};



export default CreatedDatabase;

