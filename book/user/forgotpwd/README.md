

forgotpwd
---

```
Url : https://dev.pictureair.com.cn/ai/user/forgotpwd
Method : POST 
desc : 重置密码
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| username | yes | String | 用户名 | - |
| vcode | yes | String | 激活码 | - |
| password | yes | String | 密码 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
