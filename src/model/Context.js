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

import ApiClient from '../ApiClient';

/**
 * The Context model module.
 * @module model/Context
 * @version 1.0
 */
class Context {
    /**
     * Constructs a new <code>Context</code>.
     * @alias module:model/Context
     * @param index {String} Entrypoint for an application
     */
    constructor(index) { 
        
        Context.initialize(this, index);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, index) { 
        obj['index'] = index;
    }

    /**
     * Constructs a <code>Context</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Context} obj Optional instance to populate.
     * @return {module:model/Context} The populated <code>Context</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Context();

            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('rc_file')) {
                obj['rc_file'] = ApiClient.convertToType(data['rc_file'], 'Boolean');
            }
            if (data.hasOwnProperty('build')) {
                obj['build'] = ApiClient.convertToType(data['build'], ['String']);
            }
            if (data.hasOwnProperty('run')) {
                obj['run'] = ApiClient.convertToType(data['run'], ['String']);
            }
        }
        return obj;
    }

/**
     * Returns Entrypoint for an application
     * @return {String}
     */
    getIndex() {
        return this.index;
    }

    /**
     * Sets Entrypoint for an application
     * @param {String} index Entrypoint for an application
     */
    setIndex(index) {
        this['index'] = index;
    }
/**
     * Returns Port on which the application runs
     * @return {Number}
     */
    getPort() {
        return this.port;
    }

    /**
     * Sets Port on which the application runs
     * @param {Number} port Port on which the application runs
     */
    setPort(port) {
        this['port'] = port;
    }
/**
     * Returns Is a Run Commands file present in the application's git repository's root directory?
     * @return {Boolean}
     */
    getRcFile() {
        return this.rc_file;
    }

    /**
     * Sets Is a Run Commands file present in the application's git repository's root directory?
     * @param {Boolean} rcFile Is a Run Commands file present in the application's git repository's root directory?
     */
    setRcFile(rcFile) {
        this['rc_file'] = rcFile;
    }
/**
     * Returns Commands for installing application dependencies
     * @return {Array.<String>}
     */
    getBuild() {
        return this.build;
    }

    /**
     * Sets Commands for installing application dependencies
     * @param {Array.<String>} build Commands for installing application dependencies
     */
    setBuild(build) {
        this['build'] = build;
    }
/**
     * Returns Commands for running the application
     * @return {Array.<String>}
     */
    getRun() {
        return this.run;
    }

    /**
     * Sets Commands for running the application
     * @param {Array.<String>} run Commands for running the application
     */
    setRun(run) {
        this['run'] = run;
    }

}

/**
 * Entrypoint for an application
 * @member {String} index
 */
Context.prototype['index'] = undefined;

/**
 * Port on which the application runs
 * @member {Number} port
 * @default 80
 */
Context.prototype['port'] = 80;

/**
 * Is a Run Commands file present in the application's git repository's root directory?
 * @member {Boolean} rc_file
 * @default false
 */
Context.prototype['rc_file'] = false;

/**
 * Commands for installing application dependencies
 * @member {Array.<String>} build
 */
Context.prototype['build'] = undefined;

/**
 * Commands for running the application
 * @member {Array.<String>} run
 */
Context.prototype['run'] = undefined;






export default Context;

