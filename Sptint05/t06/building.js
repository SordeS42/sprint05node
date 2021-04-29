module.exports = class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `Elevator:` + (this.hasElevatorProp ? " +" : " -"),
            `Arc reactor capacity: ${this.arcCapacityProp}`,
            `Height: ${this.heightProp}`,
            `Floor height:` + this.getFloorHeight()

        ].join('\n');
    }
};