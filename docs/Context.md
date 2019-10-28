# GasperDominusApi.Context

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **String** | Entrypoint for an application | 
**port** | **Number** | Port on which the application runs | [optional] [default to 80]
**rcFile** | **Boolean** | Is a Run Commands file present in the application&#39;s git repository&#39;s root directory? | [optional] [default to false]
**build** | **[String]** | Commands for installing application dependencies | [optional] 
**run** | **[String]** | Commands for running the application | [optional] 


