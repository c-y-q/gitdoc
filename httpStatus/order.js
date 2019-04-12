module.exports = {
	listOrders: {
		method: 'GET',
		desc: "查询订单是否交易成功",
		headers: {
			token: [1, 'String', '用户认证id']
		},
		params: {
			isPay: [0, 'boolean', "订单状态是否交易成功"]
		},
		response: {
			"orders": [{
				"orderCode": "1103170331623587",
				"createdOn": "2017-03-31 14:29:08",
				"couponsList": [],
				"orderStatus": 1,
				"totalPrice": 3000,
				"discount": 1000,
				"express": "1",
				"resultPrice": 4000,
				"entity": [],
				"cardUrl": "/sites/RSSG/orderCard.png",
				"virtualProducts": [{
					"productType": 0,
					"count": 1,
					"currency": "JYP",
					"parkName": "LEGOLAND®️ Japan"
				}]
			}]
		},
		resDesc: {
			orderStatus: ['String', '1:未付款,2:处理中,3:已完成,4:已取消,5:已退款,6:交易失败']
		}
	},
	createOrder: {
		method: 'POST',
		desc: "创建支付订单",
		headers: {
			token: [1, 'String', "标识用户身份"]
		},
		params: {
			type: [1, 'String', "DigitalPhoto/OneDayPass/DigitalVideo, 如果是买卡，OneDayPass, 如果是买照片，DigitalPhoto,如果是买照片,DigitalVideo"],
			PPCode: [0, 'String', "code卡号"],
			date: [1, 'String', "YYYY.MM.DD, 如果是买卡，卡的bindOn, 如果是买照片，照片的shootOn"],
			proId: [0, 'String', "如果是买卡，不传； 如果是买照片，照片的_id"],
			count: [1, 'String', "如果是买卡，传卡的数量； 如果是买照片，照片的数量"],
			siteId: [1, 'String', "卡的siteId"],
			terminal: [1, 'String', "终端，01 App，02 Web,03 小程序"],
			sys: [1, 'String', "手机系统， 01 ios， 02 andriod, 03 Web,05 小程序"]
		},
		response: {
			transCode: '481d799d1819b7254bd4265555370e9f1e00',
			orderCode: '0101170808449775',
			currency: 'SGD',
			price: '88',
			CNYCharge: '438',
			expiredOn: '1502173481012',
			parkName: 'snow city',
			productList: {
				virtual: [{
					count: 1,
					type: 0,
					PPCode: 'PA00102988'
				}],
				entity: []
			}
		},
		resDesc: {
			transCode: ['String', "对外显示的订单号"],
			orderCode: ['String', "对内使用的订单号"],
			currency: ['String', "货币种类"],
			price: ['Number', "订单总价"],
			CNYCharge: ['Number', "订单人民币总价"],
			expiredOn: ['Number', "订单失效时间毫秒数 30 * 60 * 1000"],
			parkName: ['String', "siteId 对应的 parkName"]
		}
	},
	deleteOrder: {
		method: 'POST',
		desc: "删除订单",
		headers: {
			token: [1, 'String', "标识用户身份"]
		},
		params: {
			orderCode: [1, 'String', "订单号"]
		},
		response: {}
	}
	
}