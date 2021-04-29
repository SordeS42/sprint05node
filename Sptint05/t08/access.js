
module.exports = class Access {
    set mark_LXXXV(str) {
        this.mark = str
    }

    get mark_LXXXV() {
        if (this.mark === null) {
            return null
        }
        else if (this.mark === undefined) {
            return undefined
        }
        else
            return this.mark
    }
}