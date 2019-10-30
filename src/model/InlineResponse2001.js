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
import Context from './Context';
import InlineResponse2001Resources from './InlineResponse2001Resources';

/**
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 1.0
 */
class InlineResponse2001 {
    /**
     * Constructs a new <code>InlineResponse2001</code>.
     * @alias module:model/InlineResponse2001
     */
    constructor() { 
        
        InlineResponse2001.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('git_url')) {
                obj['git_url'] = ApiClient.convertToType(data['git_url'], 'String');
            }
            if (data.hasOwnProperty('git_access_token')) {
                obj['git_access_token'] = ApiClient.convertToType(data['git_access_token'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = Context.constructFromObject(data['context']);
            }
            if (data.hasOwnProperty('env')) {
                obj['env'] = ApiClient.convertToType(data['env'], {'String': 'String'});
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = InlineResponse2001Resources.constructFromObject(data['resources']);
            }
            if (data.hasOwnProperty('container_id')) {
                obj['container_id'] = ApiClient.convertToType(data['container_id'], 'String');
            }
            if (data.hasOwnProperty('container_port')) {
                obj['container_port'] = ApiClient.convertToType(data['container_port'], 'Number');
            }
            if (data.hasOwnProperty('docker_image')) {
                obj['docker_image'] = ApiClient.convertToType(data['docker_image'], 'String');
            }
            if (data.hasOwnProperty('host_ip')) {
                obj['host_ip'] = ApiClient.convertToType(data['host_ip'], 'String');
            }
            if (data.hasOwnProperty('name_servers')) {
                obj['name_servers'] = ApiClient.convertToType(data['name_servers'], ['String']);
            }
            if (data.hasOwnProperty('instance_type')) {
                obj['instance_type'] = ApiClient.convertToType(data['instance_type'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('ssh_cmd')) {
                obj['ssh_cmd'] = ApiClient.convertToType(data['ssh_cmd'], 'String');
            }
            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
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
     * Returns Password required for SSH access to the application's docker container
     * @return {String}
     */
    getPassword() {
        return this.password;
    }

    /**
     * Sets Password required for SSH access to the application's docker container
     * @param {String} password Password required for SSH access to the application's docker container
     */
    setPassword(password) {
        this['password'] = password;
    }
/**
     * Returns Git Repository URL of the application
     * @return {String}
     */
    getGitUrl() {
        return this.git_url;
    }

    /**
     * Sets Git Repository URL of the application
     * @param {String} gitUrl Git Repository URL of the application
     */
    setGitUrl(gitUrl) {
        this['git_url'] = gitUrl;
    }
/**
     * Returns Access token for cloning the application's git repository
     * @return {String}
     */
    getGitAccessToken() {
        return this.git_access_token;
    }

    /**
     * Sets Access token for cloning the application's git repository
     * @param {String} gitAccessToken Access token for cloning the application's git repository
     */
    setGitAccessToken(gitAccessToken) {
        this['git_access_token'] = gitAccessToken;
    }
/**
     * @return {module:model/Context}
     */
    getContext() {
        return this.context;
    }

    /**
     * @param {module:model/Context} context
     */
    setContext(context) {
        this['context'] = context;
    }
/**
     * Returns Environment variables required by the application
     * @return {Object.<String, String>}
     */
    getEnv() {
        return this.env;
    }

    /**
     * Sets Environment variables required by the application
     * @param {Object.<String, String>} env Environment variables required by the application
     */
    setEnv(env) {
        this['env'] = env;
    }
/**
     * @return {module:model/InlineResponse2001Resources}
     */
    getResources() {
        return this.resources;
    }

    /**
     * @param {module:model/InlineResponse2001Resources} resources
     */
    setResources(resources) {
        this['resources'] = resources;
    }
/**
     * Returns ID of the application's docker container
     * @return {String}
     */
    getContainerId() {
        return this.container_id;
    }

    /**
     * Sets ID of the application's docker container
     * @param {String} containerId ID of the application's docker container
     */
    setContainerId(containerId) {
        this['container_id'] = containerId;
    }
/**
     * Returns Port alloted by the host machine to the application's docker container
     * @return {Number}
     */
    getContainerPort() {
        return this.container_port;
    }

    /**
     * Sets Port alloted by the host machine to the application's docker container
     * @param {Number} containerPort Port alloted by the host machine to the application's docker container
     */
    setContainerPort(containerPort) {
        this['container_port'] = containerPort;
    }
/**
     * Returns Docker image used in building the application's container
     * @return {String}
     */
    getDockerImage() {
        return this.docker_image;
    }

    /**
     * Sets Docker image used in building the application's container
     * @param {String} dockerImage Docker image used in building the application's container
     */
    setDockerImage(dockerImage) {
        this['docker_image'] = dockerImage;
    }
/**
     * Returns IPv4 address of the host machine
     * @return {String}
     */
    getHostIp() {
        return this.host_ip;
    }

    /**
     * Sets IPv4 address of the host machine
     * @param {String} hostIp IPv4 address of the host machine
     */
    setHostIp(hostIp) {
        this['host_ip'] = hostIp;
    }
/**
     * Returns The DNS NameServers used by the application's docker container
     * @return {Array.<String>}
     */
    getNameServers() {
        return this.name_servers;
    }

    /**
     * Sets The DNS NameServers used by the application's docker container
     * @param {Array.<String>} nameServers The DNS NameServers used by the application's docker container
     */
    setNameServers(nameServers) {
        this['name_servers'] = nameServers;
    }
/**
     * Returns The kind of instance this application belongs to
     * @return {String}
     */
    getInstanceType() {
        return this.instance_type;
    }

    /**
     * Sets The kind of instance this application belongs to
     * @param {String} instanceType The kind of instance this application belongs to
     */
    setInstanceType(instanceType) {
        this['instance_type'] = instanceType;
    }
/**
     * Returns The programming language in which the application is written
     * @return {module:model/InlineResponse2001.LanguageEnum}
     */
    getLanguage() {
        return this.language;
    }

    /**
     * Sets The programming language in which the application is written
     * @param {module:model/InlineResponse2001.LanguageEnum} language The programming language in which the application is written
     */
    setLanguage(language) {
        this['language'] = language;
    }
/**
     * Returns Owner of the application
     * @return {String}
     */
    getOwner() {
        return this.owner;
    }

    /**
     * Sets Owner of the application
     * @param {String} owner Owner of the application
     */
    setOwner(owner) {
        this['owner'] = owner;
    }
/**
     * Returns Command to SSH into the application's docker container
     * @return {String}
     */
    getSshCmd() {
        return this.ssh_cmd;
    }

    /**
     * Sets Command to SSH into the application's docker container
     * @param {String} sshCmd Command to SSH into the application's docker container
     */
    setSshCmd(sshCmd) {
        this['ssh_cmd'] = sshCmd;
    }
/**
     * Returns Application's identifier assigned by MongoDB
     * @return {String}
     */
    getId() {
        return this._id;
    }

    /**
     * Sets Application's identifier assigned by MongoDB
     * @param {String} id Application's identifier assigned by MongoDB
     */
    setId(id) {
        this['_id'] = id;
    }

}

/**
 * @member {Boolean} success
 */
InlineResponse2001.prototype['success'] = undefined;

/**
 * Name of the application
 * @member {String} name
 */
InlineResponse2001.prototype['name'] = undefined;

/**
 * Password required for SSH access to the application's docker container
 * @member {String} password
 */
InlineResponse2001.prototype['password'] = undefined;

/**
 * Git Repository URL of the application
 * @member {String} git_url
 */
InlineResponse2001.prototype['git_url'] = undefined;

/**
 * Access token for cloning the application's git repository
 * @member {String} git_access_token
 */
InlineResponse2001.prototype['git_access_token'] = undefined;

/**
 * @member {module:model/Context} context
 */
InlineResponse2001.prototype['context'] = undefined;

/**
 * Environment variables required by the application
 * @member {Object.<String, String>} env
 */
InlineResponse2001.prototype['env'] = undefined;

/**
 * @member {module:model/InlineResponse2001Resources} resources
 */
InlineResponse2001.prototype['resources'] = undefined;

/**
 * ID of the application's docker container
 * @member {String} container_id
 */
InlineResponse2001.prototype['container_id'] = undefined;

/**
 * Port alloted by the host machine to the application's docker container
 * @member {Number} container_port
 */
InlineResponse2001.prototype['container_port'] = undefined;

/**
 * Docker image used in building the application's container
 * @member {String} docker_image
 */
InlineResponse2001.prototype['docker_image'] = undefined;

/**
 * IPv4 address of the host machine
 * @member {String} host_ip
 */
InlineResponse2001.prototype['host_ip'] = undefined;

/**
 * The DNS NameServers used by the application's docker container
 * @member {Array.<String>} name_servers
 */
InlineResponse2001.prototype['name_servers'] = undefined;

/**
 * The kind of instance this application belongs to
 * @member {String} instance_type
 */
InlineResponse2001.prototype['instance_type'] = undefined;

/**
 * The programming language in which the application is written
 * @member {module:model/InlineResponse2001.LanguageEnum} language
 */
InlineResponse2001.prototype['language'] = undefined;

/**
 * Owner of the application
 * @member {String} owner
 */
InlineResponse2001.prototype['owner'] = undefined;

/**
 * Command to SSH into the application's docker container
 * @member {String} ssh_cmd
 */
InlineResponse2001.prototype['ssh_cmd'] = undefined;

/**
 * Application's identifier assigned by MongoDB
 * @member {String} _id
 */
InlineResponse2001.prototype['_id'] = undefined;





/**
 * Allowed values for the <code>language</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2001['LanguageEnum'] = {

    /**
     * value: "php"
     * @const
     */
    "php": "php",

    /**
     * value: "nodejs"
     * @const
     */
    "nodejs": "nodejs",

    /**
     * value: "static"
     * @const
     */
    "static": "static",

    /**
     * value: "python2"
     * @const
     */
    "python2": "python2",

    /**
     * value: "python3"
     * @const
     */
    "python3": "python3"
};



export default InlineResponse2001;

