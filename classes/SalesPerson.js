const { Employees } = require("./Employees");

class SalesPerson extends Employees {
    #totalSales;
    clients;

    constructor(name, position, salary) {
        super(name, position, salary);
        this.#totalSales = 0;
        this.clients = [];
    }

    getSalesNumbers() {
        return this.#totalSales;
    }

    makeSale(amount) {
        this.#totalSales += amount;
    }
}

module.exports = {
    SalesPerson,
}