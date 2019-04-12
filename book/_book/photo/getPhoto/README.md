

getPhoto
---

```
Url : https://dev.pictureair.com.cn/ai/photo/getPhoto
Method : GET 
desc : 下载photoIDs,进行打包压缩
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| photoCode | yes | String | 要下载的photoCode | - |
| shootOn | no | String | 要下载的shootOn | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
