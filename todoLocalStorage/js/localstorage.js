function getName(str) {
    return JSON.parse(localStorage.getItem(str));
  }
  function setName(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  export {getName, setName}