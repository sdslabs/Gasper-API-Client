# GasperKazeApi.Metrics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Document&#39;s identifier assigned by MongoDB | [optional] 
**name** | **String** | Name of the application | [optional] 
**hostIp** | **String** | IPv4 address of the node where the application is deployed | [optional] 
**alive** | **Boolean** | Is the application up and running? | [optional] 
**onlineCpus** | **Number** | The number of available CPUs in the node | [optional] 
**cpuUsage** | **Number** | Fraction of total CPUs utilized by the application | [optional] 
**memoryUsage** | **Number** | Fraction of memory utilized by the application | [optional] 
**maxMemoryUsage** | **Number** | Highest fraction of memory utilized by the application in its lifetime | [optional] 
**memoryLimit** | **Number** | Memory (in GigaBytes) alloted to the application | [optional] 
**timestamp** | **Number** | Unix timestamp of the metrics document | [optional] 


