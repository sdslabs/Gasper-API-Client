# GasperDominusApi.Application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the application | 
**password** | **String** | Password required for SSH access to the application&#39;s docker container | 
**gitUrl** | **String** | Git Repository URL of the application | 
**gitAccessToken** | **String** | Access token for cloning the application&#39;s git repository | [optional] 
**context** | [**Context**](Context.md) |  | 
**env** | **{String: String}** | Environment variables required by the application | [optional] 
**resources** | [**InlineResponse2001Resources**](InlineResponse2001Resources.md) |  | [optional] 


