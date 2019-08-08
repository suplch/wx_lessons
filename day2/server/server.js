const express = require('express');
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');

const http = require('http');
const path = require('path');
const app = express();

const mock = require('./mock');
const mockUser = require('./mockUsers');


app.use(bodyParser.json());

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


app.listen(3000, function (err) {
    if (err) return console.log(err)
    console.log('listening 3000');
});
