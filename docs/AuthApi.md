# GasperDominusApi.AuthApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthApi.md#login) | **POST** /auth/login | Login to get a Bearer token
[**refresh**](AuthApi.md#refresh) | **GET** /auth/refresh | Refresh JWT token using existing token
[**register**](AuthApi.md#register) | **POST** /auth/register | Register a user



## login

> LoginResponse login(login)

Login to get a Bearer token

### Example

```javascript
import GasperDominusApi from 'gasper_dominus_api';

let apiInstance = new GasperDominusApi.AuthApi();
let login = new GasperDominusApi.Login(); // Login | 
apiInstance.login(login).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | [**Login**](Login.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refresh

> LoginResponse refresh(authorization)

Refresh JWT token using existing token

### Example

```javascript
import GasperDominusApi from 'gasper_dominus_api';
let defaultClient = GasperDominusApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperDominusApi.AuthApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
apiInstance.refresh(authorization).then((data) => {
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

[**LoginResponse**](LoginResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## register

> InlineResponse200 register(user)

Register a user

### Example

```javascript
import GasperDominusApi from 'gasper_dominus_api';

let apiInstance = new GasperDominusApi.AuthApi();
let user = new GasperDominusApi.User(); // User | 
apiInstance.register(user).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

