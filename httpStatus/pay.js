module.exports = {
    wxpayFromApp: {
        method: 'POST',
        desc: '微信支付请求',
        headers: {
            token: [1, 'String', '用户认证id']
        },
        params: {
            orderCode: [1, 'String', "订单号"]
        },
        response: {
            paysign2: {
                "appid": "wxb41738d7ee3af024",
                "noncestr": "SQRl4n0mHiEmWKIX",
                "package": "Sign=WXPay",
                "partnerid": "1267007301",
                "prepayid": "wx16154140984530fdff579b764148302287",
                "timestamp": "1526456501",
                "sign": "8F4436D21761F1D009E54B96F49D7122"
            }
        },
        resDesc: {}
    },
    wxNotifyToAppPay: {
        method: 'POST',
        desc: '微信支付回调',
        headers: {},
        params: {

        },
        resDesc: {}
    },
    xcxPay: {
        method: 'POST',
        desc: '小程序微信支付请求',
        headers: {
            token: [1, 'String', '用户认证id']
        },
        params: {
            orderCode: [1, 'String', "订单号"]
        },
        response: {
            paysign2: {
                "noncestr": "SQRl4n0mHiEmWKIX",
                "package": "wx16154140984530fdff579b764148302287",
                "timestamp": "1526456501",
                "signType": "MD5",
                "sign": "8F4436D21761F1D009E54B96F49D7122"
            }
        },
        resDesc: {}
    },
    createAliPayment: {
        method: 'POST',
        desc: '支付宝支付给app返回签名参数信息',
        headers: {
            token: [1, 'String', '用户认证id']
        },
        params: {
            orderCode: [1, 'String', "订单号"]
        },
        response: {
            encodeStr: {
                "appid": "wxb41738d7ee3af024",
                "noncestr": "SQRl4n0mHiEmWKIX",
                "package": "Sign=WXPay",
                "partnerid": "1267007301",
                "prepayid": "wx16154140984530fdff579b764148302287",
                "timestamp": "1526456501",
                "sign": "8F4436D21761F1D009E54B96F49D7122"
            }
        },
        resDesc: {}
    },
    notifyFromAliPay: {
        method: 'POST',
        desc: '支付宝支付回调',
        headers: {},
        params: {
        },
        resDesc: {}
    },
    webAliPay: {
        method: 'POST',
        desc: '支付宝支付回调',
        headers: {
            token: [1, 'String', '用户认证id']
        },
        params: {
            orderCode: [1, 'String', "订单号"]
        },
        resDesc: {}
    },
    wxScanPay: {
        method: 'POST',
        desc: '支付宝支付回调',
        headers: {
            token: [1, 'String', '用户认证id']
        },
        params: {
            orderCode: [1, 'String', "订单号"]
        },
        resDesc: {}
    },
    wxJsApiPay: {
        method: 'POST',
        desc: '支付宝支付回调',
        headers: {
            token: [1, 'String', '用户认证id']
        },
        params: {
            orderCode: [1, 'String', "订单号"]
        },
        resDesc: {}
    },
    wxH5Pay: {
        method: 'POST',
        desc: '支付宝支付回调',
        headers: {
            token: [1, 'String', '用户认证id']
        },
        params: {
            orderCode: [1, 'String', "订单号"]
        },
        resDesc: {}
    },
    webAliPay2: {
        method: 'POST',
        desc: '支付宝支付回调',
        headers: {
            token: [1, 'String', '用户认证id']
        },
        params: {
            orderCode: [1, 'String', "订单号"]
        },
        resDesc: {}
    }
}