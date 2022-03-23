// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50

// Masukan suatu angka
const score = parseInt(prompt("Masukan nilai: "));

let nilai;
if (score <= 50) {
      nilai = "E";
    } else if (score <= 60) {
      nilai = "D";
    } else if (score <= 70) {
      nilai = "C";
    } else if (score <= 90) {
      nilai = "B";
    } else if (score <= 100) {
      nilai = "A";
    }
    
switch (nilai) {
      case "E":
        console.log("Nilai : E");
        break;
      case "D":
        console.log("Nilai : D");
        break;
      case "C":
        console.log("Nilai : C");
        break;
      case "B":
        console.log("Nilai : B");
        break;
      case "A":
        console.log("Nilai : A");
        break;
}
// TODO: answer here

// TODO: answer here

