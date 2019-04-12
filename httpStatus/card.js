module.exports = {
	listCards: {
		method: 'GET',
		desc: "显示用户的所有卡",
		headers: {
			token: [1, 'String', "标识用户身份"]
		},
		params: {
			// file: [1, 'Binary', "上传文件的二进制数据"],
		},
		response: {
			"cards": [{
				"code": 'PACC324YKBWUHD78',
				"bindOn": '2018.02.21',
				"siteId": 'JPGF',
				"parkName": 'JPGF',
				"ocrCard": false,
				"faceCard": false,
				"type": 0,
				"pageUrl": 'http://sky100.com.hk/',
				"shareLink": 'http://sky100.com.hk/',
				"bgUrl": 'media/924fe72bd415d0c0e3a096d64e26f02b292eb760642e00b70744f72df9e43494698c7b91e0afb079ae4208e75ac96bcd',
				"barUrl": 'media/924fe72bd415d0c0e3a096d64e26f02b292eb760642e00b70744f72df9e43494698c7b91e0afb079ae4208e75ac96bcd',
				"photosCount": 20,
				"offlineOnly": true, //只能线下购买
				"allowPay": false,
				"payCount": 5,
				"photos": [
					'media/924fe72bd415d0c0e3a096d64e26f02b292eb760642e00b70744f72df9e43494698c7b91e0afb079ae4208e75ac96bcd',
					'media/924fe72bd415d0c0e3a096d64e26f02b292eb760642e00b70744f72df9e43494698c7b91e0afb079ae4208e75ac96bcd'
				]
			}]
		},
		resDesc: {
			code: ['String', "卡号"],
			bindOn: ['String', "照片日期格式为 YYYY.MM.DD"],
			siteId: ['String', "乐园的siteId"],
			parkName: ['String', "乐园名称"],
			ocrCard: ['Boolean', "是否支持ocr搜索"],
			faceCard: ['Boolean', "是否支持人脸搜索"],
			type: ['Int', "0/1, 0为个人卡，1为共享卡"],
			pageUrl: ['String', "点击跳转的活动详情页地址"],
			shareLink: ['String', "卡分享的地址"],
			offlineOnly: ['Boolean', "true 只可以线下购买"],
			bgUrl: ['String', "卡的封面url"],
			barUrl: ['String', "bgUrl点击后的图片url"],
			photosCount: ['Int', "照片数量"],
			allowPay: ['Boolean', "卡是否可以购买, 如果卡内所有照片都买了，值为false"],
			payCount: ['Int', "卡内购买的照片数量"],
			photos: ['Araay', "只显示两张照片的x512地址数据， 如果只有一张，就重复两次"],
		}
	},
	listCardBags: {
		method: 'GET',
		desc: "显示用户的所有卡号",
		headers: {
			token: [1, 'String', "标识用户身份"]
		},
		params: {
			// file: [1, 'Binary', "上传文件的二进制数据"],
		},
		response: {
			// PPCodes,
			// PPCodesCount: PPCodes.length,
			// buyedCodes,
			// buyedCodesCount: buyedCodes.length,
			// coupons,
			// couponsCount: coupons.length
		},
		resDesc: {
			code: ['String', "卡号"],
		}
	},
	batchCreate: {
		method: 'POST',
		desc: "批量生成卡",
		headers: {
			// token: [1, 'String', "标识用户身份"]
		},
		params: {
			count: [1, 'Number', "生成卡的张数"],
			type: [1, 'Number', "生成卡的类型"],
			expiredOn: [1, 'String', "YYYYMMDD"],
			remain: [1, 'String', "预留对比字样，以确认操作"],
			siteId: [1, 'String', "生成卡的 siteId"],
			siteIds: [1, 'Array', "可以激活的 siteId"],
		}
	},
	listCardsByppCode: {
		method: 'GET',
		desc: '根据ppCode查询该卡包含的全部日期的卡信息列表,如果没有数据，返回一个默认的数据，出现common字段为默认标志',
		headers: {},
		params: {
			ppCode: [1, 'String', "ppCode参数"]
		},
		response: {
			"PPCodesInfo": [{
				"bindOn": "",
				"siteId": "PictureAir",
				"code": "PACCB2ZYZSNQJCB6",
				"parkName": "PictureAir",
				"num": 0,
				"logoUrl": "/sites/common/logo.png",
				"bgImg": "/sites/common/webTitle.jpg",
				"cardBagPPUrl": "/sites/common/cardBagPP.png"
			}]
		}
	},
	deleteCard: {
		method: 'POST',
		desc: '删除用户卡号',
		headers: {
			token: [1, 'String', "标识用户身份"]
		},
		params: {
			code: [1, 'String', "卡号"]
		}
	},
	getPPForPreActive: {
		method: 'POST',
		desc: '激活卡',
		headers: {
			token: [1, 'String', "标识用户身份"]
		},
		params: {
			code: [1, 'String', "卡号"]
		},
		response: {
			"customerIds": [{
				"code": "PACCP25VXQNDK4P5",
				"shootOn": "2018-06-01",
				"siteId": "RSSG",
				"cardBagPPUrl": "/sites/RSSG/cardBagPP.png"
			}, {
				"code": "PACCP25VXQNDK4P5",
				"shootOn": "2018-05-31",
				"siteId": "RSSG",
				"cardBagPPUrl": "/sites/RSSG/cardBagPP.png"
			}, {
				"code": "PACCB2RCNMGHJCB6",
				"shootOn": "2018-05-21",
				"siteId": "RSSG",
				"cardBagPPUrl": "/sites/RSSG/cardBagPP.png"
			}, {
				"code": "PACCFCK7AQGK8ZQK",
				"shootOn": "2018-06-04",
				"siteId": "RSSG",
				"cardBagPPUrl": "/sites/RSSG/cardBagPP.png"
			}, {
				"code": "PACCFCK7AQGK8ZQK",
				"shootOn": "2018-05-31",
				"siteId": "RSSG",
				"cardBagPPUrl": "/sites/RSSG/cardBagPP.png"
			}]
		}

	},
	getCardsBeginImg: {
		method: 'GET',
		desc: '根据ppCode查询该卡包含的开机图片，开机图片是否显示，具体问tina干嘛用的',
		headers: {},
		params: {
			ppCode: [1, 'String', "ppCode参数"]
		},
		response: {
			"cardsBeginImg": [{
				"beginImg": '/sites/common/downApp.jpg',
				"beginImgShow": false
			}]
		}
	},
	addCardToUser: {
		method: 'POST',
		desc: "老接口的程序绑卡内存cpu占满了,没找出来原因,故此重写",
		headers: {
			// token: [0, 'String', "标识用户身份"]
		},
		params: {
			customerId: [1, 'String', "url"],
			userId: [1, 'String', "userId"]
		},
		response: {},
		resDesc: {}
	},
	getCardOneDayPass: {
		method: 'GET',
		desc: "查询帐户上总的一日通卡",
		headers: {
			token: [1, 'String', "标识用户身份"]
		},
		params: {},
		response: {
			"buyedCodes": [{
				"code": "PACCP29CXF5WJ9PA",
				"PPCode": "PACCP29CXF5WJ9PA",
				"active": true,
				"cardType": "OneDayPass",
				"expiredOn": "2018-10-08",
				"effectiveOn": "2017-10-07",
				"bindOn": "2017-10-07",
				"isExpired": false,
				"cardBagBCUrl": "/sites/common/cardBagODP.png"
			}, {
				"code": "PACC927Z46CRK596",
				"PPCode": "PACC927Z46CRK596",
				"active": true,
				"cardType": "OneDayPass",
				"expiredOn": "2018-08-16",
				"effectiveOn": "2018-08-15",
				"bindOn": "2018-08-07",
				"isExpired": true,
				"cardBagBCUrl": "/sites/common/cardBagODP.png"
			}]
		},
		resDesc: {}
	},
	addCodeToUser: {
		method: 'POST',
		desc: "新绑卡接口",
		headers: {
			token: [1, 'String', "标识用户身份"]
		},
		params: {
			customerId: [1, 'String', "url"]
		},
		response: {
			cType: 'OneDayPass',
			code: 'pppppcode'
		},
		resDesc: {}
	},
	activeCodeToUser: {
		method: 'POST',
		desc: "激活一日通卡",
		headers: {
			token: [1, 'String', "标识用户身份"]
		},
		params: {
			customerId: [1, 'String', "必须传"],
			cardId: [1, 'String', "抵用券号或者一日通卡号"],
			siteId: [1, 'String', "siteId"],
			shootOn: [0, 'String', "shootOn"],
			photoIds: [0, 'Array', "携程的优惠券去激活几张照片,使用抵用券的时候必须传"]
		},
		response: {
		},
		resDesc: {}
	},
	activeCardToUser: {
		method: 'POST',
		desc: "激活一日通卡",
		headers: {
			// token: [1, 'String', "标识用户身份"]
		},
		params: {
			userId: [1, 'String', "userId"],
			customerId: [1, 'String', "url"],
			cardId: [1, 'String', "cardId"],
			siteId: [1, 'String', "siteId"],
			shootOn: [1, 'String', "shootOn"]
		},
		response: {
		},
		resDesc: {}
	}
}