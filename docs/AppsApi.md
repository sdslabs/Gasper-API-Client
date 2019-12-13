# GasperKazeApi.AppsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApp**](AppsApi.md#createApp) | **POST** /apps/{language} | Create an application
[**deleteAppByUser**](AppsApi.md#deleteAppByUser) | **DELETE** /apps/{app} | Delete an application owned by a user
[**fetchAppByUser**](AppsApi.md#fetchAppByUser) | **GET** /apps/{app} | Fetch a single application owned by a user
[**fetchAppsByUser**](AppsApi.md#fetchAppsByUser) | **GET** /apps | Fetch all applications owned by a user
[**fetchLogsByUser**](AppsApi.md#fetchLogsByUser) | **GET** /apps/{app}/logs | Fetch logs of an application
[**fetchMetricsByUser**](AppsApi.md#fetchMetricsByUser) | **GET** /apps/{app}/metrics | Fetch metrics of an application
[**fetchTerminalByUser**](AppsApi.md#fetchTerminalByUser) | **GET** /apps/{app}/term | Fetch a browser terminal instance for an application owned by a user
[**rebuildAppByUser**](AppsApi.md#rebuildAppByUser) | **PATCH** /apps/{app}/rebuild | Rebuild an application
[**transferAppByUser**](AppsApi.md#transferAppByUser) | **PATCH** /apps/{app}/transfer/{userEmail} | Transfer ownership of an application to another user
[**updateAppByUser**](AppsApi.md#updateAppByUser) | **PUT** /apps/{app} | Update an application owned by a user



## createApp

> InlineResponse2001 createApp(authorization, language, application)

Create an application

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';
let defaultClient = GasperKazeApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperKazeApi.AppsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let language = "language_example"; // String | The programming language in which the application is written
let application = new GasperKazeApi.Application(); // Application | 
apiInstance.createApp(authorization, language, application).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **language** | **String**| The programming language in which the application is written | 
 **application** | [**Application**](Application.md)|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAppByUser

> InlineResponse2003 deleteAppByUser(authorization, app)

Delete an application owned by a user

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';
let defaultClient = GasperKazeApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperKazeApi.AppsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let app = "app_example"; // String | The name of the application
apiInstance.deleteAppByUser(authorization, app).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **app** | **String**| The name of the application | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchAppByUser

> InlineResponse2002 fetchAppByUser(authorization, app)

Fetch a single application owned by a user

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';
let defaultClient = GasperKazeApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperKazeApi.AppsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let app = "app_example"; // String | The name of the application
apiInstance.fetchAppByUser(authorization, app).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **app** | **String**| The name of the application | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchAppsByUser

> InlineResponse2002 fetchAppsByUser(authorization)

Fetch all applications owned by a user

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';
let defaultClient = GasperKazeApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperKazeApi.AppsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
apiInstance.fetchAppsByUser(authorization).then((data) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchLogsByUser

> InlineResponse2005 fetchLogsByUser(authorization, app, opts)

Fetch logs of an application

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';
let defaultClient = GasperKazeApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperKazeApi.AppsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let app = "app_example"; // String | The name of the application
let opts = {
  'tail': 3 // Number | Fetch the last **n** logs (Fetches all logs if not specified)
};
apiInstance.fetchLogsByUser(authorization, app, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **app** | **String**| The name of the application | 
 **tail** | **Number**| Fetch the last **n** logs (Fetches all logs if not specified) | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchMetricsByUser

> InlineResponse2006 fetchMetricsByUser(authorization, app, opts)

Fetch metrics of an application

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';
let defaultClient = GasperKazeApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperKazeApi.AppsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let app = "app_example"; // String | The name of the application
let opts = {
  'seconds': 8, // Number | Fetch metrics in the last **n** seconds
  'minutes': 7, // Number | Fetch metrics in the last **n** minutes
  'hours': 6, // Number | Fetch metrics in the last **n** hours
  'days': 5, // Number | Fetch metrics in the last **n** days
  'weeks': 4, // Number | Fetch metrics in the last **n** weeks
  'months': 3, // Number | Fetch metrics in the last **n** months
  'years': 2, // Number | Fetch metrics in the last **n** years
  'decades': 1 // Number | Fetch metrics in the last **n** decades
};
apiInstance.fetchMetricsByUser(authorization, app, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **app** | **String**| The name of the application | 
 **seconds** | **Number**| Fetch metrics in the last **n** seconds | [optional] 
 **minutes** | **Number**| Fetch metrics in the last **n** minutes | [optional] 
 **hours** | **Number**| Fetch metrics in the last **n** hours | [optional] 
 **days** | **Number**| Fetch metrics in the last **n** days | [optional] 
 **weeks** | **Number**| Fetch metrics in the last **n** weeks | [optional] 
 **months** | **Number**| Fetch metrics in the last **n** months | [optional] 
 **years** | **Number**| Fetch metrics in the last **n** years | [optional] 
 **decades** | **Number**| Fetch metrics in the last **n** decades | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchTerminalByUser

> InlineResponse2004 fetchTerminalByUser(authorization, app)

Fetch a browser terminal instance for an application owned by a user

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';
let defaultClient = GasperKazeApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperKazeApi.AppsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let app = "app_example"; // String | The name of the application
apiInstance.fetchTerminalByUser(authorization, app).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **app** | **String**| The name of the application | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rebuildAppByUser

> InlineResponse2001 rebuildAppByUser(authorization, app)

Rebuild an application

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';
let defaultClient = GasperKazeApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperKazeApi.AppsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let app = "app_example"; // String | The name of the application
apiInstance.rebuildAppByUser(authorization, app).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **app** | **String**| The name of the application | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## transferAppByUser

> InlineResponse2003 transferAppByUser(authorization, app, userEmail)

Transfer ownership of an application to another user

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';
let defaultClient = GasperKazeApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperKazeApi.AppsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let app = "app_example"; // String | The name of the application
let userEmail = "userEmail_example"; // String | Email ID of the user
apiInstance.transferAppByUser(authorization, app, userEmail).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **app** | **String**| The name of the application | 
 **userEmail** | **String**| Email ID of the user | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAppByUser

> InlineResponse2001 updateAppByUser(authorization, app, application)

Update an application owned by a user

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';
let defaultClient = GasperKazeApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperKazeApi.AppsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let app = "app_example"; // String | The name of the application
let application = new GasperKazeApi.Application(); // Application | 
apiInstance.updateAppByUser(authorization, app, application).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **app** | **String**| The name of the application | 
 **application** | [**Application**](Application.md)|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

