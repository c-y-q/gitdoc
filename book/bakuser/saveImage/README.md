

saveImage
---

```
Url : https://dev.pictureair.com.cn/ai/bakuser/saveImage
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
| base64str | yes | String | base64 图片 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "imageUlr": {
            "orderImg": "https://dev.pictureair.com.cn/oss/sites/adad/1543456651644/orderCard.png"
        }
    }
}
```
