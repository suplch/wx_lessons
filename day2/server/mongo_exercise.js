
const {getTestDBSync, getStudents } = require('./mongo/mongo_database');

// getTestDB(function (db) {
//
//     db.collection('students').find({age: {$gte: 30}}).toArray(function (err, result) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(result)
//     });
// });

//使用 async 和 await 将异步操作 变成同步模式
async function main() {

    try {
        // await
        const db = await getTestDBSync();
        const student_collection = db.collection('students');
        const students = await getStudents(student_collection, {age: {$gte: 30}});
        console.log(students);
    } catch (err) {
        console.log(err);
    }
}

main();



// MongoClient.connect(dbUrl, function (err, client) {
//
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('连接成功');
//
//     const testDb = client.db('test');
//
//     let students = testDb.collection('students');
//
//     students.find({age: {$gte: 30}}).toArray(function (err, result) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(result)
//     });
//
//
//
// });

// MongoClient.connect(dbUrl, function (err, client) {
//
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('连接成功');
//
//     const testDb = client.db('test');
//
//     testDb.collection('students').insert({name: '小赵', age: 35}, function (err, result) {
//         if (err) {
//             console.log(err)
//             return;
//         }
//         console.log(result)
//     });
//     client.close();
//
// });

// MongoClient.connect(dbUrl, function (err, client) {
//
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('连接成功');
//
//     const testDb = client.db('test');
//
//     testDb.collection('students').update({name: 'li'}, {$set: {name: '李'}}, function (err, result) {
//         if(err) {
//             console.log(err);
//             return;
//         }
//         console.log(result)
//     });
//     client.close();
//
// });

// 连接mongo数据库数据
// MongoClient.connect(dbUrl, function (err, client) {
//     // 如果有错误 进行错误处理
//     if (err) {
//         console.log(err);
//         return;
//     }
//     // 否则表示连接成功
//     console.log('连接成功');
//     // client 表示 回调函数返回的mongo客户端
//     // client.db方法可以返回 具体的数据库对象
//     const testDb = client.db('test');
//     // collection 方法 返回 具体的数据表
//     testDb.collection('students').remove({name: '韩梅梅'}, function (err, result) {
//         if(err) {
//             console.log(err);
//             return;
//         }
//         console.log(result)
//     });
//     client.close();
// });

// 安装一下 cnpm 工具
// npm install -g cnpm --registry=https://registry.npm.taobao.org
