

register
---

```
Url : https://dev.pictureair.com.cn/ai/user/register
Method : POST 
desc : 邮箱注册用户，注册成功后直接进入首页
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| username | yes | String | 邮箱格式 | - |
| password | yes | String | 密码 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "token": "2bd415d0c0e3a096d64e26f"
    }
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| token | String |认证标志 |
