
let orderId = 80000;

const orderList = [
    // {
    //     id: '8888',
    //     userId: '123456',
    //     goodsItems: [
    //         {pid: '111', count: 3, price: 76},
    //         {pid: '222', count: 2, price: 110},
    //     ],
    //     place: {
    //         address: '武汉',
    //         phone: 12345,
    //         person: '张三'
    //     },
    //     state: '未支付'  // 已支付
    // }
];


module.exports = {
    generateOrder(userId, goodsItems, place) {

        let total = 0;
        for (let item of goodsItems) {
            total += item.price * item.count;
        }


        let order = {
            id: orderId++,
            userId: userId,
            goodsItems,
            place,
            total,
            state: '未支付'
        };
        orderList.push(order)

        return order.id
    },


    changeOrderState(orderId) {
        console.log('orderId', orderId)
        let position = orderList.findIndex((order) => {
            return order.id == orderId
        });

        let order = orderList[position];
        order.state = '已支付';
        console.log(order);
        console.log(orderList)
    },

    getOrderList(userId) {
        let userOrderList = orderList.filter((order) => {
            return order.userId === userId
        })

        return userOrderList;
    }
};
