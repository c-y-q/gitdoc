

verifyemailcode
---

```
Url : https://dev.pictureair.com.cn/ai/user/verifyemailcode
Method : GET 
desc : 验证邮箱激活码是否有效
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| vcode | yes | String | 激活码 | - |

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
