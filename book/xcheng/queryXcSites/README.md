

queryXcSites
---

```
Url : https://dev.pictureair.com.cn/ai/xcheng/queryXcSites
Method : POST 
desc : 根据sited和protype返回携程对应的spotid和tid
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| siteId | yes | String | pa端的siteId | - |
| proType | yes | String | pa端的产品类型 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "xcSites": {
            "spotid": "17246269",
            "tid": "2016672"
        }
    }
}
```
