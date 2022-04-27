// Implementasikan teks editor sederhana
// Teks editor ini memiliki 4 method:

// - Write: digunakan untuk menulis per karakter
// - Read: digunakan untuk mencetak karakter yang telah ditulis
// - Undo: digunakan untuk melakukan operasi undo
// - Redo: digunakan untuk melakukan operasi redo

module.exports = class TextEditor {
    constructor() {
        // TODO: answer here
        this.undoStack = [];
        this.redoStack = [];
    }

    write(c) {
        // TODO: answer here
        if (this.redoStack.length >= 1) { // jika ada redo kosongi 
            this.redoStack = [];
        } else {
            this.undoStack.push(c); // jika tidak ada redo push
        }
    }

    read() {
        // TODO: answer here
        if (this.undoStack.length >= 1) { //jika ada undo, join
            return this.undoStack.join('');
        } else { 
            return ''; // return string kosong
        }
    }

    undo() {
        // TODO: answer here
        if (this.undoStack.length >= 1) { // jika ada undo push ke redo
            this.redoStack.push(this.undoStack.pop()); 
        }
    }
    
    redo() {
        // TODO: answer here
        if (this.redoStack.length >= 1) { // jika ada redo push ke undo
            this.undoStack.push(this.redoStack.pop());
        }
    }
};
