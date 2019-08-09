const express = require('express');
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const http = require('http');
const path = require('path');
const app = express();

const mock = require('./mock');
const mockUser = require('./mockUsers');
const mockOrder = require('./mockOrder');



app.use(bodyParser.json());
app.use(cookieParser());

app.use('static', express.static(path.join(__dirname, 'public')));

app.get('/api/getproducts',function(req,res,next){

    const pageSize = Number(req.query.pageSize);
    const pageNo = Number(req.query.pageNo);

    const offset = pageSize * (pageNo - 1);

    res.send({
        products: mock.getProducts(pageSize, offset)
    });
});

app.get('/api/productDetail', function (req, res) {

    const productId = req.query.pid;
    const detail = mock.getProductDetail(productId)

    if (detail) {
        res.send({
            productDetail: detail
        })
    } else {
        res.send({
            msg: '未发布',
            productDetail: null
        })
    }
});

app.post('/api/login', function (req, res) {
    const { loginName, password } = req.body;
    const user = mockUser.login(loginName, password);

    if (user) {
        var token = jwt.sign(user, '秘钥11111');
        res.send({
            status: 10000,
            data: {
                userId: user.id,
                userName: user.name,
                token: token
            }
        })
    } else {
        res.send({
            status: 11001
        })
    }

});


app.get('/api/userAmount', function (req, res) {
    jwt.verify(req.cookies.token, '秘钥11111', function (err, user) {
        if(err) {
            res.send({
                msg: 'token 失效'
            });
            return;
        }


        let userRecord = mockUser.getUser(user.id);

        res.send({
            status: 10000,
            data: {
                amount: userRecord.amount
            }
        })
    });
});


app.post('/api/payment', function (req, res) {

    jwt.verify(req.cookies.token, '秘钥11111', function (err, user) {
        if(err) {
            res.send({
                msg: 'token 失效'
            });
            return;
        }
        const {place, goodsItems} = req.body;


        const orderId = mockOrder.generateOrder(user.id, goodsItems, place);

        let amount = 0;
        for (let item of goodsItems) {
            amount += item.price * item.count
        }
        console.log('orderId: ', orderId, ' amount', amount);
        let success = mockUser.decAmount(user.id, amount);

        if (success) {
            mockOrder.changeOrderState(orderId);

            setTimeout(function () {
                res.send({
                    status: 10000,
                    msg: '支付成功',
                    data: {
                        orderId
                    }
                })
            }, 1000)


        } else {
            res.send({
                status: 19000,
                msg: '支付失败 余额不足, 请充值'
            })
        }
    });
});

app.get('/api/getOrders', function (req, res) {

    jwt.verify(req.cookies.token, '秘钥11111', function (err, user) {
        if(err) {
            res.send({
                status: 10001,
                msg: 'token 失效'
            });
            return;
        }

        let orderList = mockOrder.getOrderList(user.id);

        res.send({
            status: 10000,
            data: {
                orderList
            }
        })
    });
});


app.get('/api/getgender', function (req, res) {
    const userId = req.query.userId;
    console.log('cookie ', req.cookies)

    if (!req.cookies.token) {
        res.send({
            status: 13000,
            msg: '未登录, 不能访问'
        });
        return;
    }

    jwt.verify(req.cookies.token, '秘钥11111', function (err, user) {
        if (err) {
            res.send({
                status: 14000,
                msg: 'token 失效'
            });
            return;
        }

        if (user.id !== userId) {
            res.send({
                status: 15000,
                msg: '不能窃取他人信息'
            });
            return;
        }

        user = mockUser.getUser(userId);

        if (user) {
            res.send({
                status: 10000,
                userId: user.id,
                userName: user.name,
                gender: user.gender
            })
        } else {
            res.send({
                status: 12000
            })
        }

    });

});

app.get('/index.html', function (req, res) {
    res.send('<html><body>Hello </body></html>')
})


app.listen(3000, function (err) {
    if (err) return console.log(err)
    console.log('listening 3000');
});
