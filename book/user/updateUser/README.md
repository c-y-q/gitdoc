

updateUser
---

```
Url : https://dev.pictureair.com.cn/ai/user/updateUser
Method : POST 
desc : 更新用户信息
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 用户认证id | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| name | no | String | 用户名字/昵称 | - |
| gender | no | String | -1 未知 0 女 1 男 | - |
| mobile | no | String | 手机号,如果传了，格式必需正确 | - |
| birthday | no | String | 生日,年月日 | - |
| address | no | String | 地址 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
