const Building = require("./building")

module.exports = class Tower extends Building {
    set hasElevator(hasElevator) {
        this.hasElevatorProp = hasElevator;
    }

    set arcCapacity(arcCapacity) {
        this.arcCapacityProp = arcCapacity;
    }
    set height(height) {
        this.heightProp = height;
    }

    getFloorHeight() {
        let FloorHeight = this.heightProp / this.floors;
        return FloorHeight;
    }
}