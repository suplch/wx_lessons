
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
        let order = {
            id: orderId++,
            userId: userId,
            goodsItems,
            place,
            state: '未支付'
        };
        orderList.push(order)

        return order.id
    },


    changeOrderState(orderId) {
        let order = orderList.findIndex((order) => {
            return order.id == orderId
        });

        order.state = '已支付';
    }
};
