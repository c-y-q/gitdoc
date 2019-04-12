

verifyMobileCode
---

```
Url : https://dev.pictureair.com.cn/ai/user/verifyMobileCode
Method : GET 
desc : 验证邮箱激活码是否有效
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| v | yes | String | 激活码 | - |
| email | yes | String | 邮箱 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "email": "eggsycao@163.com"
    }
}
```
