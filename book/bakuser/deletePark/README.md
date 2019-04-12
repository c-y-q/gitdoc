

deletePark
---

```
Url : https://dev.pictureair.com.cn/ai/bakuser/deletePark
Method : POST 
desc : 获取项目列表
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 用户认证id | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| parkId | yes | String | 乐园_id | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
