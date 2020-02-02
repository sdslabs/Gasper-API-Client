# GasperKazeApi.InstancesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetchIntancesByUser**](InstancesApi.md#fetchIntancesByUser) | **GET** /instances | Fetch all instances owned by a user



## fetchIntancesByUser

> InlineResponse2001 fetchIntancesByUser(authorization)

Fetch all instances owned by a user

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';
let defaultClient = GasperKazeApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperKazeApi.InstancesApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
apiInstance.fetchIntancesByUser(authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

