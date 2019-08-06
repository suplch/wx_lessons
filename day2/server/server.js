const express = require('express');


const path = require('path');
const app = express();

const mock = require('./mock');

app.use('static', express.static(path.join(__dirname, 'public')));

app.get('/api/getproducts',function(req,res,next){

    const pageSize = Number(req.query.pageSize);
    const pageNo = Number(req.query.pageNo);

    const offset = pageSize * (pageNo - 1);

    res.send({
        products: mock.getProducts(pageSize, offset)
    });
});


app.listen(3000, function (err) {
    if (err) return console.log(err)
    console.log('listening 3000');
});
