// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi push.

module.exports = class Stack {
    constructor() {
        // TODO: answer here
        this.data = []
        this.size = 10
        this.top = -1
    }

    push(elemen) {
        // TODO: answer here
        if (this.data.length == this.size) {
            throw "stack overflow"
        } else {
            this.top += 1
            return this.data.push(elemen)
        }
    }
}
