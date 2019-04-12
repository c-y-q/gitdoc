

addUser
---

```
Url : https://dev.pictureair.com.cn/ai/bakuser/addUser
Method : POST 
desc : 增加用户
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| username | yes | String | 用户名 | - |
| name | yes | String | 用户名 | - |
| roleIds | yes | Array | 服务范围 | - |
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
