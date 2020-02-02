# GasperKazeApi.AdminApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAppByAdmin**](AdminApi.md#deleteAppByAdmin) | **DELETE** /admin/apps/{app} | Delete an application
[**deleteDbByAdmin**](AdminApi.md#deleteDbByAdmin) | **DELETE** /admin/dbs/{db} | Delete a single database
[**deleteUserByAdmin**](AdminApi.md#deleteUserByAdmin) | **DELETE** /admin/users/{userEmail} | Delete a single user
[**fetchAppByAdmin**](AdminApi.md#fetchAppByAdmin) | **GET** /admin/apps/{app} | Fetch a single application
[**fetchAppsByAdmin**](AdminApi.md#fetchAppsByAdmin) | **GET** /admin/apps | Fetch all applications with/without a filter defined by query params
[**fetchDbByAdmin**](AdminApi.md#fetchDbByAdmin) | **GET** /admin/dbs/{db} | Fetch a single database
[**fetchDbsByAdmin**](AdminApi.md#fetchDbsByAdmin) | **GET** /admin/dbs | Fetch all databases with/without a filter defined by query params
[**fetchNodeByAdmin**](AdminApi.md#fetchNodeByAdmin) | **GET** /admin/nodes/{type} | Fetch bind addresses(IP:Port) of a single microservice on all nodes
[**fetchNodesByAdmin**](AdminApi.md#fetchNodesByAdmin) | **GET** /admin/nodes | Fetch bind addresses(IP:Port) of all microservices on all nodes
[**fetchUserByAdmin**](AdminApi.md#fetchUserByAdmin) | **GET** /admin/users/{userEmail} | Fetch a single user
[**fetchUsersByAdmin**](AdminApi.md#fetchUsersByAdmin) | **GET** /admin/users | Fetch all users with/without a filter defined by query params
[**grantSuperuserPrivilege**](AdminApi.md#grantSuperuserPrivilege) | **PATCH** /admin/users/{userEmail}/grant | Grant superuser privileges to a single user
[**revokeSuperuserPrivilege**](AdminApi.md#revokeSuperuserPrivilege) | **PATCH** /admin/users/{userEmail}/revoke | Revoke superuser privileges from a single user



## deleteAppByAdmin

> InlineResponse2004 deleteAppByAdmin(authorization, app)

Delete an application

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';

let apiInstance = new GasperKazeApi.AdminApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let app = "app_example"; // String | The name of the application
apiInstance.deleteAppByAdmin(authorization, app).then((data) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDbByAdmin

> InlineResponse2004 deleteDbByAdmin(authorization, db)

Delete a single database

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';

let apiInstance = new GasperKazeApi.AdminApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let db = "db_example"; // String | Name of the database
apiInstance.deleteDbByAdmin(authorization, db).then((data) => {
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

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUserByAdmin

> InlineResponse2004 deleteUserByAdmin(authorization, userEmail)

Delete a single user

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';

let apiInstance = new GasperKazeApi.AdminApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let userEmail = "userEmail_example"; // String | Email ID of the user
apiInstance.deleteUserByAdmin(authorization, userEmail).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **userEmail** | **String**| Email ID of the user | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchAppByAdmin

> InlineResponse2003 fetchAppByAdmin(authorization, app)

Fetch a single application

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';

let apiInstance = new GasperKazeApi.AdminApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let app = "app_example"; // String | The name of the application
apiInstance.fetchAppByAdmin(authorization, app).then((data) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchAppsByAdmin

> InlineResponse2003 fetchAppsByAdmin(authorization, opts)

Fetch all applications with/without a filter defined by query params

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';

let apiInstance = new GasperKazeApi.AdminApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let opts = {
  'name': "name_example", // String | Name of the application
  'owner': "owner_example", // String | Owner of the application
  'language': nodejs, // String | Language in which the application is written
  'dockerImage': sdsws/node:2.0, // String | Docker Image used in building the application's container
  'hostIp': 192.168.208.208, // String | IPv4 address of the node in which the application is deployed
  'gitUrl': "gitUrl_example", // String | Application's Git Repository URL
  'containerPort': 35000 // String | Port assigned by the node to the application's docker container
};
apiInstance.fetchAppsByAdmin(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **name** | **String**| Name of the application | [optional] 
 **owner** | **String**| Owner of the application | [optional] 
 **language** | **String**| Language in which the application is written | [optional] 
 **dockerImage** | **String**| Docker Image used in building the application&#39;s container | [optional] 
 **hostIp** | **String**| IPv4 address of the node in which the application is deployed | [optional] 
 **gitUrl** | **String**| Application&#39;s Git Repository URL | [optional] 
 **containerPort** | **String**| Port assigned by the node to the application&#39;s docker container | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchDbByAdmin

> InlineResponse2009 fetchDbByAdmin(authorization, db)

Fetch a single database

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';

let apiInstance = new GasperKazeApi.AdminApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let db = "db_example"; // String | Name of the database
apiInstance.fetchDbByAdmin(authorization, db).then((data) => {
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

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchDbsByAdmin

> InlineResponse2009 fetchDbsByAdmin(authorization, opts)

Fetch all databases with/without a filter defined by query params

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';

let apiInstance = new GasperKazeApi.AdminApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let opts = {
  'name': "name_example", // String | Name of the database
  'user': "user_example", // String | User of the database
  'owner': "owner_example", // String | Owner of the database
  'language': mysql, // String | Type of the database
  'hostIp': 192.168.208.208, // String | IPv4 address of the node in which the database is deployed
  'containerPort': 35000 // String | Port assigned by the node to the database's docker container
};
apiInstance.fetchDbsByAdmin(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **name** | **String**| Name of the database | [optional] 
 **user** | **String**| User of the database | [optional] 
 **owner** | **String**| Owner of the database | [optional] 
 **language** | **String**| Type of the database | [optional] 
 **hostIp** | **String**| IPv4 address of the node in which the database is deployed | [optional] 
 **containerPort** | **String**| Port assigned by the node to the database&#39;s docker container | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchNodeByAdmin

> InlineResponse20015 fetchNodeByAdmin(authorization, type)

Fetch bind addresses(IP:Port) of a single microservice on all nodes

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';

let apiInstance = new GasperKazeApi.AdminApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let type = master; // String | Type of microservice
apiInstance.fetchNodeByAdmin(authorization, type).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **type** | **String**| Type of microservice | 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchNodesByAdmin

> InlineResponse20014 fetchNodesByAdmin(authorization)

Fetch bind addresses(IP:Port) of all microservices on all nodes

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';

let apiInstance = new GasperKazeApi.AdminApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
apiInstance.fetchNodesByAdmin(authorization).then((data) => {
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

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchUserByAdmin

> InlineResponse20013 fetchUserByAdmin(authorization, userEmail)

Fetch a single user

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';

let apiInstance = new GasperKazeApi.AdminApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let userEmail = "userEmail_example"; // String | Email ID of the user
apiInstance.fetchUserByAdmin(authorization, userEmail).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **userEmail** | **String**| Email ID of the user | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchUsersByAdmin

> InlineResponse20013 fetchUsersByAdmin(authorization, opts)

Fetch all users with/without a filter defined by query params

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';

let apiInstance = new GasperKazeApi.AdminApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let opts = {
  'username': "username_example", // String | Name of the user
  'email': "email_example", // String | Email of the user
  'admin': true // Boolean | Field denoting superuser privileges
};
apiInstance.fetchUsersByAdmin(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **username** | **String**| Name of the user | [optional] 
 **email** | **String**| Email of the user | [optional] 
 **admin** | **Boolean**| Field denoting superuser privileges | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## grantSuperuserPrivilege

> InlineResponse2004 grantSuperuserPrivilege(authorization, userEmail)

Grant superuser privileges to a single user

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';

let apiInstance = new GasperKazeApi.AdminApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let userEmail = "userEmail_example"; // String | Email ID of the user
apiInstance.grantSuperuserPrivilege(authorization, userEmail).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **userEmail** | **String**| Email ID of the user | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revokeSuperuserPrivilege

> InlineResponse2004 revokeSuperuserPrivilege(authorization, userEmail)

Revoke superuser privileges from a single user

### Example

```javascript
import GasperKazeApi from 'gasper_kaze_api';

let apiInstance = new GasperKazeApi.AdminApi();
let authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; // String | Bearer Token Authentication
let userEmail = "userEmail_example"; // String | Email ID of the user
apiInstance.revokeSuperuserPrivilege(authorization, userEmail).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer Token Authentication | 
 **userEmail** | **String**| Email ID of the user | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

