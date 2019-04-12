

deleteUser
---

```
Url : https://dev.pictureair.com.cn/ai/bakuser/deleteUser
Method : POST 
desc : 删除用户
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 用户认证id | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| userId | yes | String | 修改的用户id | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
