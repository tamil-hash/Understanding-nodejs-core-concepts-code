module.exports = class EventEmitter {
  listeners = {};

  addEventListener(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
  }

  on(eventName, fn) {
    this.addEventListener(eventName, fn);
  }
  once(eventName, fn) {
    this.addEventListener(eventName, fn);
  }

  emit(eventName, ...args) {
    this.listeners[eventName].map((fn) => {
      fn(...args);
    });
  }

}