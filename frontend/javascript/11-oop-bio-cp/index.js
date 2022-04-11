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
  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get getJob() {
    return this.job;
  }
  set setName(name) {
    this.name = name;
  }
  set setAge(age) {
    this.age = age;
  }
  set setJob(job) {
    this.job = job;
  }
} 

// let case1 = new Person("Jhon", 29, "Programmer")

// case1.getName();
// case1.getAge();
// case1.getJob();

// case1.setName("Jane");
// case1.setAge(25);
// case1.setJob("Engineer");

// case1.getName();
// case1.getAge();
// case1.getJob();

module.exports = Person