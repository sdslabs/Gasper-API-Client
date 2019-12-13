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
 * The Metrics model module.
 * @module model/Metrics
 * @version 1.0
 */
class Metrics {
    /**
     * Constructs a new <code>Metrics</code>.
     * @alias module:model/Metrics
     */
    constructor() { 
        
        Metrics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Metrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Metrics} obj Optional instance to populate.
     * @return {module:model/Metrics} The populated <code>Metrics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Metrics();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('host_ip')) {
                obj['host_ip'] = ApiClient.convertToType(data['host_ip'], 'String');
            }
            if (data.hasOwnProperty('alive')) {
                obj['alive'] = ApiClient.convertToType(data['alive'], 'Boolean');
            }
            if (data.hasOwnProperty('online_cpus')) {
                obj['online_cpus'] = ApiClient.convertToType(data['online_cpus'], 'Number');
            }
            if (data.hasOwnProperty('cpu_usage')) {
                obj['cpu_usage'] = ApiClient.convertToType(data['cpu_usage'], 'Number');
            }
            if (data.hasOwnProperty('memory_usage')) {
                obj['memory_usage'] = ApiClient.convertToType(data['memory_usage'], 'Number');
            }
            if (data.hasOwnProperty('max_memory_usage')) {
                obj['max_memory_usage'] = ApiClient.convertToType(data['max_memory_usage'], 'Number');
            }
            if (data.hasOwnProperty('memory_limit')) {
                obj['memory_limit'] = ApiClient.convertToType(data['memory_limit'], 'Number');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns Document's identifier assigned by MongoDB
     * @return {String}
     */
    getId() {
        return this._id;
    }

    /**
     * Sets Document's identifier assigned by MongoDB
     * @param {String} id Document's identifier assigned by MongoDB
     */
    setId(id) {
        this['_id'] = id;
    }
/**
     * Returns Name of the application
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets Name of the application
     * @param {String} name Name of the application
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns IPv4 address of the node where the application is deployed
     * @return {String}
     */
    getHostIp() {
        return this.host_ip;
    }

    /**
     * Sets IPv4 address of the node where the application is deployed
     * @param {String} hostIp IPv4 address of the node where the application is deployed
     */
    setHostIp(hostIp) {
        this['host_ip'] = hostIp;
    }
/**
     * Returns Is the application up and running?
     * @return {Boolean}
     */
    getAlive() {
        return this.alive;
    }

    /**
     * Sets Is the application up and running?
     * @param {Boolean} alive Is the application up and running?
     */
    setAlive(alive) {
        this['alive'] = alive;
    }
/**
     * Returns The number of available CPUs in the node
     * @return {Number}
     */
    getOnlineCpus() {
        return this.online_cpus;
    }

    /**
     * Sets The number of available CPUs in the node
     * @param {Number} onlineCpus The number of available CPUs in the node
     */
    setOnlineCpus(onlineCpus) {
        this['online_cpus'] = onlineCpus;
    }
/**
     * Returns Fraction of total CPUs utilized by the application
     * @return {Number}
     */
    getCpuUsage() {
        return this.cpu_usage;
    }

    /**
     * Sets Fraction of total CPUs utilized by the application
     * @param {Number} cpuUsage Fraction of total CPUs utilized by the application
     */
    setCpuUsage(cpuUsage) {
        this['cpu_usage'] = cpuUsage;
    }
/**
     * Returns Fraction of memory utilized by the application
     * @return {Number}
     */
    getMemoryUsage() {
        return this.memory_usage;
    }

    /**
     * Sets Fraction of memory utilized by the application
     * @param {Number} memoryUsage Fraction of memory utilized by the application
     */
    setMemoryUsage(memoryUsage) {
        this['memory_usage'] = memoryUsage;
    }
/**
     * Returns Highest fraction of memory utilized by the application in its lifetime
     * @return {Number}
     */
    getMaxMemoryUsage() {
        return this.max_memory_usage;
    }

    /**
     * Sets Highest fraction of memory utilized by the application in its lifetime
     * @param {Number} maxMemoryUsage Highest fraction of memory utilized by the application in its lifetime
     */
    setMaxMemoryUsage(maxMemoryUsage) {
        this['max_memory_usage'] = maxMemoryUsage;
    }
/**
     * Returns Memory (in GigaBytes) alloted to the application
     * @return {Number}
     */
    getMemoryLimit() {
        return this.memory_limit;
    }

    /**
     * Sets Memory (in GigaBytes) alloted to the application
     * @param {Number} memoryLimit Memory (in GigaBytes) alloted to the application
     */
    setMemoryLimit(memoryLimit) {
        this['memory_limit'] = memoryLimit;
    }
/**
     * Returns Unix timestamp of the metrics document
     * @return {Number}
     */
    getTimestamp() {
        return this.timestamp;
    }

    /**
     * Sets Unix timestamp of the metrics document
     * @param {Number} timestamp Unix timestamp of the metrics document
     */
    setTimestamp(timestamp) {
        this['timestamp'] = timestamp;
    }

}

/**
 * Document's identifier assigned by MongoDB
 * @member {String} _id
 */
Metrics.prototype['_id'] = undefined;

/**
 * Name of the application
 * @member {String} name
 */
Metrics.prototype['name'] = undefined;

/**
 * IPv4 address of the node where the application is deployed
 * @member {String} host_ip
 */
Metrics.prototype['host_ip'] = undefined;

/**
 * Is the application up and running?
 * @member {Boolean} alive
 */
Metrics.prototype['alive'] = undefined;

/**
 * The number of available CPUs in the node
 * @member {Number} online_cpus
 */
Metrics.prototype['online_cpus'] = undefined;

/**
 * Fraction of total CPUs utilized by the application
 * @member {Number} cpu_usage
 */
Metrics.prototype['cpu_usage'] = undefined;

/**
 * Fraction of memory utilized by the application
 * @member {Number} memory_usage
 */
Metrics.prototype['memory_usage'] = undefined;

/**
 * Highest fraction of memory utilized by the application in its lifetime
 * @member {Number} max_memory_usage
 */
Metrics.prototype['max_memory_usage'] = undefined;

/**
 * Memory (in GigaBytes) alloted to the application
 * @member {Number} memory_limit
 */
Metrics.prototype['memory_limit'] = undefined;

/**
 * Unix timestamp of the metrics document
 * @member {Number} timestamp
 */
Metrics.prototype['timestamp'] = undefined;






export default Metrics;
