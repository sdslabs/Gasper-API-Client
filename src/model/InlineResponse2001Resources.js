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
 * The InlineResponse2001Resources model module.
 * @module model/InlineResponse2001Resources
 * @version 1.0
 */
class InlineResponse2001Resources {
    /**
     * Constructs a new <code>InlineResponse2001Resources</code>.
     * Resources required by the application
     * @alias module:model/InlineResponse2001Resources
     */
    constructor() { 
        
        InlineResponse2001Resources.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001Resources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001Resources} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001Resources} The populated <code>InlineResponse2001Resources</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001Resources();

            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'Number');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns Number of virtual CPUs
     * @return {Number}
     */
    getCpu() {
        return this.cpu;
    }

    /**
     * Sets Number of virtual CPUs
     * @param {Number} cpu Number of virtual CPUs
     */
    setCpu(cpu) {
        this['cpu'] = cpu;
    }
/**
     * Returns Memory in GigaBytes (GB)
     * @return {Number}
     */
    getMemory() {
        return this.memory;
    }

    /**
     * Sets Memory in GigaBytes (GB)
     * @param {Number} memory Memory in GigaBytes (GB)
     */
    setMemory(memory) {
        this['memory'] = memory;
    }

}

/**
 * Number of virtual CPUs
 * @member {Number} cpu
 */
InlineResponse2001Resources.prototype['cpu'] = undefined;

/**
 * Memory in GigaBytes (GB)
 * @member {Number} memory
 */
InlineResponse2001Resources.prototype['memory'] = undefined;






export default InlineResponse2001Resources;

