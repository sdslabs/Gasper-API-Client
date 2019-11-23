# GasperApi.DbsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDB**](DbsApi.md#createDB) | **POST** /dbs/{databaseType} | Create a database
[**deleteDbByUser**](DbsApi.md#deleteDbByUser) | **DELETE** /dbs/{db} | Delete a single database owned by a user
[**fetchDbByUser**](DbsApi.md#fetchDbByUser) | **GET** /dbs/{db} | Fetch a single database owned by a user
[**fetchDbsByUser**](DbsApi.md#fetchDbsByUser) | **GET** /dbs | Fetch all databases owned by a user
[**transferDbByUser**](DbsApi.md#transferDbByUser) | **PATCH** /dbs/{db}/transfer/{userEmail} | Transfer ownership of a database to another user



## createDB

> InlineResponse2005 createDB(authorization, databaseType, opts)

Create a database

### Example

```javascript
import GasperApi from 'gasper_api';
let defaultClient = GasperApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperApi.DbsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let databaseType = "databaseType_example"; // String | The type of database
let opts = {
  'database': new GasperApi.Database() // Database | 
};
apiInstance.createDB(authorization, databaseType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **databaseType** | **String**| The type of database | 
 **database** | [**Database**](Database.md)|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDbByUser

> InlineResponse2003 deleteDbByUser(authorization, db)

Delete a single database owned by a user

### Example

```javascript
import GasperApi from 'gasper_api';
let defaultClient = GasperApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperApi.DbsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let db = "db_example"; // String | Name of the database
apiInstance.deleteDbByUser(authorization, db).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **db** | **String**| Name of the database | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchDbByUser

> InlineResponse2006 fetchDbByUser(authorization, db)

Fetch a single database owned by a user

### Example

```javascript
import GasperApi from 'gasper_api';
let defaultClient = GasperApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperApi.DbsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let db = "db_example"; // String | Name of the database
apiInstance.fetchDbByUser(authorization, db).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **db** | **String**| Name of the database | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchDbsByUser

> InlineResponse2006 fetchDbsByUser(authorization)

Fetch all databases owned by a user

### Example

```javascript
import GasperApi from 'gasper_api';
let defaultClient = GasperApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperApi.DbsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
apiInstance.fetchDbsByUser(authorization).then((data) => {
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

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## transferDbByUser

> InlineResponse2003 transferDbByUser(authorization, db, userEmail)

Transfer ownership of a database to another user

### Example

```javascript
import GasperApi from 'gasper_api';
let defaultClient = GasperApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GasperApi.DbsApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let db = "db_example"; // String | Name of the database
let userEmail = "userEmail_example"; // String | Email ID of the user
apiInstance.transferDbByUser(authorization, db, userEmail).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **db** | **String**| Name of the database | 
 **userEmail** | **String**| Email ID of the user | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

