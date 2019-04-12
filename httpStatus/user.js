module.exports = {
	sendSMS: {
		method: 'POST',
		desc: "向指定的手机号码发送短信,3分钟一次",
		headers: {},
		params: {
			phone: [1, 'String', "区号+手机号码如:8615834104719"],
			lg: [1, 'String', "en-US/zh-CN/ja-JP"]
		},
		resDesc: {}
	},
	thirdLogin: {
		method: 'POST',
		desc: '第三方登录',
		headers: {},
		params: {
			uuid: [0, 'String', "设备的uuid"],
			type: [1, 'String', "wx/fb"],
			terminal: [1, 'String', "ios/adriod,按照之前的0或1传"],
			lg: [1, 'String', 'en/us'],
			access_token: [0, 'String', "微信登录必传"],
			openid: [0, 'String', "app认证的openid，授权用户唯一标识,微信为必需"],
			fbId: [0, 'String', "为facebook获取的用户id时，必传"],
			fbName: [0, 'String', "为facebook获取的用户name时，必传"]
		},
		response: {
			token: '2bd415d0c0e3a096d64e26f'
		},
		resDesc: {
			'token': ['String', '认证标志']
		}
	},
	updateUser: {
		method: 'POST',
		desc: '更新用户信息',
		headers: {
			token: [1, 'String', '用户认证id']
		},
		params: {
			name: [0, 'String', "用户名字/昵称"],
			gender: [0, 'String', "-1 未知 0 女 1 男"],
			mobile: [0, 'String', "手机号,如果传了，格式必需正确"],
			birthday: [0, 'String', "生日,年月日"],
			address: [0, 'String', "地址"]
		},
		response: {},
		resDesc: {}
	},
	quickLogin: {
		method: 'POST',
		desc: "向指定的手机号码发送短信",
		headers: {},
		params: {
			username: [1, 'String', "手机号码"],
			vcode: [1, 'String', "验证码"],
			areaCode: [1, 'String', "区号,如86"]
		},
		resDesc: {
			'token': ['String', '认证标志']
		},
		response: {
			token: '2bd415d0c0e3a096d64e26f'
		}
	},
	getUser: {
		method: 'POST',
		desc: '获取用户信息',
		headers: {
			token: [1, 'String', '用户认证id']
		},
		params: {},
		response: {
			user: {
				"name": "我是说",
				"userName": "eeel@111.com",
				"userType": "user",
				"mobile": "",
				"email": "eeel@111.com",
				"country": "",
				"gender": 0,
				"birthday": "1970-02-01T00:00:00.000Z",
				"address": [],
				"coverHeaderImage": "",
				"favoriteLocationIds": [],
				"qq": "",
				"userPP": "PWUPF964FFB46DAE",
				"hiddenPPList": [],
				"favoritePhotos": [],
				"likePhotos": [],
				"emailVerified": false,
				"disabled": false,
				"coupons": [],
				"disablereason": "",
				"customerIdsLen": 4,
				"lgcode": "en-US",
				"customerIds": [{
					"bindOn": "2018-05-21T03:18:52.402Z",
					"code": "PWUPF964FFB46DAE"
				}, {
					"bindOn": "2018-05-21T09:15:25.899Z",
					"code": "PACCB2RCNMGHJCB6"
				}, {
					"bindOn": "2018-05-24T06:13:50.765Z",
					"code": "PACC82P9AGHKJ525"
				}, {
					"bindOn": "2018-05-24T08:19:32.541Z",
					"code": "PACCFCUUSPRPU2W5"
				}],
				"photosNum": 108,
				"userLink": "https://web.pictureair.com/?src=usercard&vid=PWUPF964FFB46DAE"
			}
		},
		resDesc: {}
	},
	sendemailpwd: {
		method: 'POST',
		desc: "忘记密码了，发送邮件",
		headers: {},
		params: {
			username: [1, 'String', "邮箱"],
			lg: [0, 'String', 'en-US,zh-CN,ja-Pan,默认en-US']
		},
		resDesc: {}
	},
	verifyemailcode: {
		method: 'GET',
		desc: "验证邮箱激活码是否有效",
		headers: {},
		params: {
			vcode: [1, 'String', "激活码"]
		},
		response: {
			"email": "eggsycao@163.com"
		},
		resDesc: {}
	},
	forgotpwd: {
		method: 'POST',
		desc: "重置密码",
		headers: {},
		params: {
			username: [1, 'String', "用户名"],
			vcode: [1, 'String', "激活码"],
			password: [1, 'String', "密码"]
		},
		resDesc: {}
	},
	login: {
		method: 'POST',
		desc: '用户登录',
		headers: {},
		params: {
			username: [1, 'String', "用户名"],
			password: [1, 'String', "密码"]
		},
		response: {
			token: '2bd415d0c0e3a096d64e26f'
		},
		resDesc: {
			'token': ['String', '认证标志']
		}
	},
	contactUs: {
		method: 'POST',
		desc: "联系我们",
		headers: {},
		params: {
			name: [1, 'String', "用户名"],
			EmailAddress: [1, 'String', "邮箱地址"],
			parkName: [1, 'String', "公园名称"],
			feedback: [1, 'String', "问题反馈"],
			lg: [0, 'String', 'en-US,zh-CN,ja-Pan,默认,zh-CN'],
			visitDate: [0, 'String', "访问日期"],
			pictureAirCode: [0, 'String', "卡号"],
			orderID: [0, 'String', "订单号"],
			operatingSystem: [0, 'String', "操作系统"]
		},
		resDesc: {}
	},
	wxPaLogin: {
		method: 'POST',
		desc: "微信小程序登录",
		headers: {},
		params: {
			code: [1, 'String', "用户登录凭证（有效期五分钟）"],
			encryptedData: [1, 'String', "小程序签名数据"],
			iv: [1, 'String', "iv"]
		},
		resDesc: {
			'token': ['String', '认证标志']
		},
		response: {
			token: '2bd415d0c0e3a096d64e26f'
		}
	},
	weChatHelper: {
		method: 'POST',
		desc: "问tina",
		headers: {},
		params: {
			weChatUrl: [1, 'String', "url"]
		},
		response: {},
		resDesc: {}
	},
	rptlogin: {
		method: 'POST',
		desc: '用户登录',
		headers: {},
		params: {
			account: [1, 'String', "用户名"],
			password: [1, 'String', "密码"]
		},
		response: {
			token: '2bd415d0c0e3a096d64e26f',
			role: ['boss', 'monitor']
		},
		resDesc: {
			'token': ['String', '认证标志'],
			'role': ['String', '0为超级权限']
		}
	},
	getPark: {
		method: 'POST',
		desc: "显示用户的所有卡号",
		headers: {
			token: [1, 'String', "标识用户身份"]
		},
		params: {},
		response: {
			"project": [{
				"siteId": "PUCF",
				"name": "PUCF CNY Open Day 2017"
			}, {
				"siteId": "LLJP",
				"currency": "JYP",
				"name": "LEGOLAND®️ Japan"
			}]
		},
		resDesc: {
			'siteId': ['String', '项目编号,乐园编号'],
			'currency': ['String', '乐园支持的货币种类'],
			'name': ['String', '乐园名字']
		}
	},
	getRegistInfo: {
		method: 'POST',
		desc: "得到注册用户",
		headers: {
			token: [1, 'String', "标识用户身份"]
		},
		params: {
			beginDate: [1, 'String', "用户名"],
			endDate: [1, 'String', "密码"]
		},
		response: {

		},
		resDesc: {}
	},
	register: {
		method: 'POST',
		desc: "邮箱注册用户，注册成功后直接进入首页",
		headers: {},
		params: {
			username: [1, 'String', "邮箱格式"],
			password: [1, 'String', "密码"]
		},
		resDesc: {
			'token': ['String', '认证标志']
		},
		response: {
			token: '2bd415d0c0e3a096d64e26f'
		}
	}
}