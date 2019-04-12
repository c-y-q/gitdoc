

editPark
---

```
Url : https://dev.pictureair.com.cn/ai/bakuser/editPark
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
| parkId | yes | String | 乐园_id | - |
| name | no | String | 乐园名称 | - |
| siteId | no | String | 乐园代号 | - |
| pageUrl | no | String | url | - |
| orderImg | no | String | https://dev.pictureair.com.cn/oss/sites/adad/1543456651644/orderCard.png | - |
| currency | no | String | 货币 | - |
| address | no | String | 乐园所在地 | - |
| appImg | no | String | 同orderImg | - |
| cardImg | no | String | 同orderImg | - |
| webImg | no | String | 同orderImg | - |
| webPhoneImg | no | String | 同orderImg | - |
| ocrCard | no | Boolean | 是否支持号码搜索 | - |
| faceCard | no | Boolean | 是否支持人脸照片搜索 | - |
| beginImgShow | no | String | 是否显示开机动画 | - |
| parkCardCode | no | String | 乐园的共享卡 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
