

getCardsBeginImg
---

```
Url : https://dev.pictureair.com.cn/ai/card/getCardsBeginImg
Method : GET 
desc : 根据ppCode查询该卡包含的开机图片，开机图片是否显示，具体问tina干嘛用的
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| ppCode | yes | String | ppCode参数 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "cardsBeginImg": [
            {
                "beginImg": "/sites/common/downApp.jpg",
                "beginImgShow": false
            }
        ]
    }
}
```
