function setItem(key, value) {
    localStorage.setItem(key, value);
}

function getItem(key) {
    return localStorage.getItem(key);
}

function clearAll() {
    localStorage.clear();
}

function removeItem(key) {
    localStorage.removeItem(key);
}

module.exports = { setItem, getItem, clearAll, removeItem }