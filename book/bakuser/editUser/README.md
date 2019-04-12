

editUser
---

```
Url : https://dev.pictureair.com.cn/ai/bakuser/editUser
Method : POST 
desc : 注销用户
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 用户认证id | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| username | yes | String | 用户名 | - |
| name | yes | String | 用户名 | - |
| roleIds | yes | Array | 服务范围 | - |
| userId | yes | String | 修改的用户id | - |
| role | yes | Array | 权限范围 | - |
| password | yes | String | 密码 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
