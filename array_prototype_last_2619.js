// 2619 COMPLETED 🟢
Array.prototype.last = function () {
    // const isValid = this.length === 0 ? -1 : this[this.length - 1];
    return this.length === 0 ? -1 : this[this.length - 1];
};

const arr = [];
const res = arr.last();
