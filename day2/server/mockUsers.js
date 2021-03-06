
const users = [
    {id: '123456', login_name: 'zhang', name:'张三', password: '123', gender: '男', age: 18, amount: 10000},
    {id: '22222', login_name: 'wang', name:'王五', password: '456', gender: '女', age: 18, amount: 10000},
    {id: '333333', login_name: 'li', name:'李四', password: '789', gender: '男', age: 28, amount: 10000}
];

module.exports = {
    login(loginName, password) {
        const position = users.findIndex((user) => {
            return loginName === user.login_name;
        });

        if (position > -1) {
            return users[position];
        }
        return null;
    },

    getUser(userId) {
        const position = users.findIndex((user) => {
            return user.id === userId
        });

        return users[position];
    },

    decAmount(userId, amount) {
        console.log('userid: ', userId)
        let position = users.findIndex((user) => {
            return user.id === userId
        });
        let user = users[position];
        console.log('user ', user);
        if (user) {
            if (user.amount >= amount) {
                user.amount = user.amount - amount;
                return true;
            }
        }
        return false;
    }
};
