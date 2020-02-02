# GasperKazeApi.InlineResponse2002

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **Boolean** |  | [optional] 
**name** | **String** | Name of the application | [optional] 
**password** | **String** | Password required for SSH access to the application&#39;s docker container | [optional] 
**git** | [**Git**](Git.md) |  | [optional] 
**context** | [**Context**](Context.md) |  | [optional] 
**env** | **{String: String}** | Environment variables required by the application | [optional] 
**resources** | [**InlineResponse2002Resources**](InlineResponse2002Resources.md) |  | [optional] 
**containerId** | **String** | ID of the application&#39;s docker container | [optional] 
**containerPort** | **Number** | Port assigned by the node to the application&#39;s docker container | [optional] 
**dockerImage** | **String** | Docker image used in building the application&#39;s container | [optional] 
**appUrl** | **String** | The domain name of the application (DNS entry is managed by Hikari 💡) | [optional] 
**hostIp** | **String** | IPv4 address of the node | [optional] 
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




