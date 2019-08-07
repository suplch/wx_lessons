
const shoppingCart = wx.getStorageSync('shoppingCart') || {items: [
  // {pid: '111', count: 2
]}

module.exports = {
  addCart(product_id, pname, price) {
    const position = shoppingCart.items.findIndex((item) => {
      return item.pid === product_id;
    })
    if (position === -1) {
      shoppingCart.items.push({ pid: product_id, name: pname, price: price, count: 1 })
    } else {
      shoppingCart.items[position].count++
    }
    wx.setStorageSync('shoppingCart', shoppingCart);
    console.log(shoppingCart);
  },

  getCartItems() {
    return shoppingCart.items;
  },

  incCount(product_id) {
    const position = shoppingCart.items.findIndex((item) => {
      return item.pid === product_id;
    })
    shoppingCart.items[position].count++;
    wx.setStorageSync('shoppingCart', shoppingCart);
  },

  decCount(product_id) {
    const position = shoppingCart.items.findIndex((item) => {
      return item.pid === product_id;
    })
    shoppingCart.items[position].count--
    wx.setStorageSync('shoppingCart', shoppingCart);
  },

  getTotal() {
    let sum = 0;
    for (let item of shoppingCart.items) {
      sum += item.price * item.count;
    }
    return sum;
  },

  getCartItemCount() {
    let count = 0;
    for (let item of shoppingCart.items) {
      count += item.count;
    }
    return count;
  }
}