
const products = [
    {id: '111', name: '棒球帽', imgUrl: 'https://img.alicdn.com/bao/uploaded/i3/813808592/TB2PpYmXlDH8KJjSszcXXbDTFXa_!!813808592.jpg_240x240.jpg'},
    {id: '222', name: 't恤海魂衫男', imgUrl: 'https://img.alicdn.com/bao/uploaded/i3/813808592/TB2ntRvpbXlpuFjSszfXXcSGXXa_!!813808592.jpg_240x240.jpg'},
    {id: '333', name: 't桖衫学院风海魂衫潮', imgUrl: 'https://img.alicdn.com/bao/uploaded/i1/813808592/TB2pOv6gY_0UKFjy1XaXXbKfXXa_!!813808592.jpg_240x240.jpg'},
    {id: '444', name: '嘻哈半袖衫', imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/TB1G2D9srSYBuNjSspfYXIZCpXa_M2.SS2_240x240.jpg'},
    {id: '555', name: '棒球帽', imgUrl: 'https://img.alicdn.com/bao/uploaded/i3/813808592/TB2PpYmXlDH8KJjSszcXXbDTFXa_!!813808592.jpg_240x240.jpg'},
    {id: '666', name: 't恤海魂衫男', imgUrl: 'https://img.alicdn.com/bao/uploaded/i3/813808592/TB2ntRvpbXlpuFjSszfXXcSGXXa_!!813808592.jpg_240x240.jpg'},
    {id: '777', name: 't桖衫学院风海魂衫潮', imgUrl: 'https://img.alicdn.com/bao/uploaded/i1/813808592/TB2pOv6gY_0UKFjy1XaXXbKfXXa_!!813808592.jpg_240x240.jpg'},
    {id: '888', name: '嘻哈半袖衫', imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/TB1G2D9srSYBuNjSspfYXIZCpXa_M2.SS2_240x240.jpg'},
    {id: '999', name: '棒球帽', imgUrl: 'https://img.alicdn.com/bao/uploaded/i3/813808592/TB2PpYmXlDH8KJjSszcXXbDTFXa_!!813808592.jpg_240x240.jpg'},
    {id: '1000', name: 't恤海魂衫男', imgUrl: 'https://img.alicdn.com/bao/uploaded/i3/813808592/TB2ntRvpbXlpuFjSszfXXcSGXXa_!!813808592.jpg_240x240.jpg'},
    {id: '1111', name: 't桖衫学院风海魂衫潮', imgUrl: 'https://img.alicdn.com/bao/uploaded/i1/813808592/TB2pOv6gY_0UKFjy1XaXXbKfXXa_!!813808592.jpg_240x240.jpg'},
    {id: '22222', name: '嘻哈半袖衫', imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/TB1G2D9srSYBuNjSspfYXIZCpXa_M2.SS2_240x240.jpg'},

];



module.exports = {
    getProducts(size, offset) {
        let page = products.slice(offset, offset + size);
        return page;
    }
};
