
// const events = {
//   // 'eventA': [
//   //   function() {},
//   //   function () { },
//   // ],
//   // 'eventB': [
//   //   function() {},
//   //   function () { },
//   // ]
// };

const events = {};

module.exports = {
  on(eventName, callback) {
    let callbackList = events[eventName];
    if (!callbackList) {
      callbackList = [];
    }
    callbackList.push(callback)
    events[eventName] = callbackList;

    return {
      cancle() {
        let position = callbackList.indexOf(callback);
        callbackList.splice(position, 1);
      }
    }
  },

  emit(eventName, data) {
    const callbackList = events[eventName];
    if (callbackList) {
      for (let callback of callbackList) {
        callback(data);
      }
    }
  }
}