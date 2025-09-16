const authEvents = {
  subscribe(eventName, callback) {
    document.addEventListener(eventName, callback);
  },
  unsubscribe(eventName, callback) {
    document.removeEventListener(eventName, callback);
  },
  dispatch(eventName, data) {
    document.dispatchEvent(new CustomEvent(eventName, { detail: data }));
  }
};

export default authEvents;
