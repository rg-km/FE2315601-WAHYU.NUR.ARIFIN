/**
 * Pada soal kali ini disediakan class `Person` dimana kalian diminta untuk melengkapi serta membuat beberapa hal dibawah ini:
 * - Class Person yang memiliki properti name, age, dan job
 * - Buatlah getter untuk masing masing Properti diatas dengan format `getName` untuk mendapatkan nama, `getAge` untuk mendapatkan usia, dan `getJob` untuk mendapatkan pekerjaan dari class Person.
 * - Buatlah setter untuk masing masing Properti diatas dengan format `setName` untuk mengubah nilai nama, `setAge` untuk mengubah nilai usia, dan `setJob` untuk mengubah nilai pekerjaan dari class Person
 */

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  
  // TODO: answer here
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getJob() {
    return this.job;
  }
  setName(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
  }
  setJob(job) {
    this.job = job;
  }
  getResult() {
    return `${this.name} ${this.age} ${this.job}`;
  }
} 

const person = new Person('Wahyu Nur Arifin', '20', 'Frontend Engineer');
console.log(person.getResult());

module.exports = Person