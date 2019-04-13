class logarithm {
    constructor(base=10, e) {
        this.base = base;
        this.e = e;
    }

    solve() {
        return Math.log(this.e)/Math.log(this.base)
    }
}

module.exports = logarithm;