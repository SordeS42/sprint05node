function  getAnonymous(name, alias, affiliation) {
    class PrivatClass {
        #privateClass

        constructor(name, alias, affiliation) {
            this.name = name;
            this.alias = alias;
            this.affiliation = affiliation;
        }
        #privateMethod(){
            return this.#privateClass
        }
    }
    return new PrivatClass(name,alias,affiliation)
}

module.exports.getAnonymous = getAnonymous;