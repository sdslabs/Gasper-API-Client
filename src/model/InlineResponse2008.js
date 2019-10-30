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
 * The InlineResponse2008 model module.
 * @module model/InlineResponse2008
 * @version 1.0
 */
class InlineResponse2008 {
    /**
     * Constructs a new <code>InlineResponse2008</code>.
     * @alias module:model/InlineResponse2008
     */
    constructor() { 
        
        InlineResponse2008.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2008</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008} The populated <code>InlineResponse2008</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('dominus')) {
                obj['dominus'] = ApiClient.convertToType(data['dominus'], ['String']);
            }
            if (data.hasOwnProperty('enrai')) {
                obj['enrai'] = ApiClient.convertToType(data['enrai'], ['String']);
            }
            if (data.hasOwnProperty('hikari')) {
                obj['hikari'] = ApiClient.convertToType(data['hikari'], ['String']);
            }
            if (data.hasOwnProperty('mizu')) {
                obj['mizu'] = ApiClient.convertToType(data['mizu'], ['String']);
            }
            if (data.hasOwnProperty('mongodb')) {
                obj['mongodb'] = ApiClient.convertToType(data['mongodb'], ['String']);
            }
            if (data.hasOwnProperty('mysql')) {
                obj['mysql'] = ApiClient.convertToType(data['mysql'], ['String']);
            }
            if (data.hasOwnProperty('ssh')) {
                obj['ssh'] = ApiClient.convertToType(data['ssh'], ['String']);
            }
        }
        return obj;
    }

/**
     * @return {Boolean}
     */
    getSuccess() {
        return this.success;
    }

    /**
     * @param {Boolean} success
     */
    setSuccess(success) {
        this['success'] = success;
    }
/**
     * @return {Array.<String>}
     */
    getDominus() {
        return this.dominus;
    }

    /**
     * @param {Array.<String>} dominus
     */
    setDominus(dominus) {
        this['dominus'] = dominus;
    }
/**
     * @return {Array.<String>}
     */
    getEnrai() {
        return this.enrai;
    }

    /**
     * @param {Array.<String>} enrai
     */
    setEnrai(enrai) {
        this['enrai'] = enrai;
    }
/**
     * @return {Array.<String>}
     */
    getHikari() {
        return this.hikari;
    }

    /**
     * @param {Array.<String>} hikari
     */
    setHikari(hikari) {
        this['hikari'] = hikari;
    }
/**
     * @return {Array.<String>}
     */
    getMizu() {
        return this.mizu;
    }

    /**
     * @param {Array.<String>} mizu
     */
    setMizu(mizu) {
        this['mizu'] = mizu;
    }
/**
     * @return {Array.<String>}
     */
    getMongodb() {
        return this.mongodb;
    }

    /**
     * @param {Array.<String>} mongodb
     */
    setMongodb(mongodb) {
        this['mongodb'] = mongodb;
    }
/**
     * @return {Array.<String>}
     */
    getMysql() {
        return this.mysql;
    }

    /**
     * @param {Array.<String>} mysql
     */
    setMysql(mysql) {
        this['mysql'] = mysql;
    }
/**
     * @return {Array.<String>}
     */
    getSsh() {
        return this.ssh;
    }

    /**
     * @param {Array.<String>} ssh
     */
    setSsh(ssh) {
        this['ssh'] = ssh;
    }

}

/**
 * @member {Boolean} success
 */
InlineResponse2008.prototype['success'] = undefined;

/**
 * @member {Array.<String>} dominus
 */
InlineResponse2008.prototype['dominus'] = undefined;

/**
 * @member {Array.<String>} enrai
 */
InlineResponse2008.prototype['enrai'] = undefined;

/**
 * @member {Array.<String>} hikari
 */
InlineResponse2008.prototype['hikari'] = undefined;

/**
 * @member {Array.<String>} mizu
 */
InlineResponse2008.prototype['mizu'] = undefined;

/**
 * @member {Array.<String>} mongodb
 */
InlineResponse2008.prototype['mongodb'] = undefined;

/**
 * @member {Array.<String>} mysql
 */
InlineResponse2008.prototype['mysql'] = undefined;

/**
 * @member {Array.<String>} ssh
 */
InlineResponse2008.prototype['ssh'] = undefined;






export default InlineResponse2008;

