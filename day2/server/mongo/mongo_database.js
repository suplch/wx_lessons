const mongodb =  require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbUrl = 'mongodb://localhost:27017';
function getTestDB(callback) {
    MongoClient.connect(dbUrl, function (err, client) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('连接成功');

        const testDb = client.db('test');
        callback(testDb)
    });
}
function getTestDBSync() {
    // 返回 Promise 对象, 配合 async 和 await 模拟 同步调用
    return new Promise(function (resolve, reject) {
        MongoClient.connect(dbUrl, function (err, client) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            console.log('连接成功');
            const testDb = client.db('test');
            resolve(testDb);
        });
    });
}
function getStudents(student_collection, filter) {
    return new Promise(function (resolve, reject) {
        student_collection.find(filter).toArray(function (err, result) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}
module.exports = {
    getTestDB,
    getTestDBSync,
    getStudents
};
