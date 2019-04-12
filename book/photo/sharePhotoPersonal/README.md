

sharePhotoPersonal
---

```
Url : https://dev.pictureair.com.cn/ai/photo/sharePhotoPersonal
Method : POST 
desc : 共享照片转到个人卡中
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 用户认证id | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| siteId | yes | String | siteId | - |
| photoIds | yes | String | 照片_id,多个用,号隔开 | - |
| personCode | yes | String | 共享照片导入到哪张卡 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
