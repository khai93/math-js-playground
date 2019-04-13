class Exponent {
    constructor(base, power) {
        this.base = base;
        this.power = power;
    }

    solve() {
        return(this.base ** this.power);
    }

}

module.exports = Exponent;