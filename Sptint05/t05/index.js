module.exports = class HardWorker {
    set name(name) { this.nameProp = name }
    set age(age) {
        if (age >= 1 && age <= 100)
            this.ageProp = age
    }
    set salary(salary) {
        if (salary >= 100 && salary <= 10000)
            this.salaryProp = salary
    }

    get name() { return this.nameProp }
    get salary() { return this.salaryProp }
    get age() { return this.ageProp }

    toObject() {
        let obj = {}
        obj["name"] = this.nameProp
        obj["age"] = this.ageProp
        obj["salary"] = this.salaryProp
        return obj
    }
}