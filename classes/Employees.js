class Employees {
#salary
#isHired 
constructor(name, position, salary){
    this.name = name
    this.position = position
    this.#salary = salary
    this.#isHired = true
}
getSalary(){
    return this.#salary
}

setSalary(amount){
this.#salary = amount

}

getStatus(){
    return this.#isHired
}
setStatus(command){
if (command === "hire"){
    return this.#isHired = true
}
else if (command === "fire")
    return this.#isHired = false
}


static #allEmployees = [];

static getEmployees() {
    return Employee.#allEmployees;
}

static getTotalPayroll() {
    return Employee.#allEmployees.reduce((total, employee) => total + employee.getSalary(), 0);
}
}
module.exports = {
    Employees,
}