# GasperApi.CreatedApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the application | [optional] 
**password** | **String** | Password required for SSH access to the application&#39;s docker container | [optional] 
**git** | [**Git**](Git.md) |  | [optional] 
**context** | [**Context**](Context.md) |  | [optional] 
**env** | **{String: String}** | Environment variables required by the application | [optional] 
**resources** | [**InlineResponse2001Resources**](InlineResponse2001Resources.md) |  | [optional] 
**containerId** | **String** | ID of the application&#39;s docker container | [optional] 
**containerPort** | **Number** | Port alloted by the host machine to the application&#39;s docker container | [optional] 
**dockerImage** | **String** | Docker image used in building the application&#39;s container | [optional] 
**hostIp** | **String** | IPv4 address of the host machine | [optional] 
**nameServers** | **[String]** | The DNS NameServers used by the application&#39;s docker container | [optional] 
**instanceType** | **String** | The kind of instance this application belongs to | [optional] 
**language** | **String** | The programming language in which the application is written | [optional] 
**owner** | **String** | Owner of the application | [optional] 
**sshCmd** | **String** | Command to SSH into the application&#39;s docker container | [optional] 
**id** | **String** | Application&#39;s identifier assigned by MongoDB | [optional] 



## Enum: LanguageEnum


* `php` (value: `"php"`)

* `nodejs` (value: `"nodejs"`)

* `static` (value: `"static"`)

* `python2` (value: `"python2"`)

* `python3` (value: `"python3"`)

* `golang` (value: `"golang"`)

* `ruby` (value: `"ruby"`)




