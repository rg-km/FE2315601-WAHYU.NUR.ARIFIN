// Buat kalkulator objek dengan 5 methods:
// - read() meminta (prompt) dua nilai dan menyimpannya sebagai properti objek.
// - sum() mengembalikan jumlah nilai yang disimpan.
// - substract() mengurangi jumlah nilai yang disimpan.
// - multiply() mengalikan nilai yang disimpan.
// - division() membagi nilai yang disimpan.

let calculator = {
  // Tulis kode di sini
  // TODO: answer here
  
  read() {
    this.a = prompt("Masukkan nilai a");
    this.b = prompt("Masukkan nilai b");
  },
  sum() {
    let tambah = this.a + this.b;
    return "a + b = " + tambah;
  },
  substract() {
    let kurang = this.a - this.b;
    return "a - b = " + kurang;
  },
  multiply() {
    let kali = this.a * this.b;
    return "a * b = " + kali;
  },
  division() {
    let bagi =  this.a / this.b;
    return "a / b = " + bagi;
  }

};
  
calculator.read();
console.log(calculator.sum());
console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.division());