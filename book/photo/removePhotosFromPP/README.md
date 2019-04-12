

removePhotosFromPP
---

```
Url : https://dev.pictureair.com.cn/ai/photo/removePhotosFromPP
Method : POST 
desc : 删除照片
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 用户认证id | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| photoIds | yes | String | 要删除的photo id，多个用逗号隔开 | - |
| code | yes | String | 卡号 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "status": "200,删除成功"
    }
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| status | String |200,删除成功 |
