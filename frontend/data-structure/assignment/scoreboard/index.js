// `Nilai = 4 x Jumlah Benar - 1 x Jumlah Salah`

// - Kita ingin mengurutkan hasil ujian siswa, urut berdasarkan nilai tertinggi ke terendah.
// - Jika ada yang nilainya sama, maka:
//   - Yang `Jumlah Benar`-nya lebih tinggi akan diurutkan di atas.
//   - Jika masih sama:
//     - Yang `Nama`-nya lebih awal akan diurutkan di atas

class Score {
    constructor(name, correct, wrong, empty) {
        // TODO: answer here
        this.name = name;
        this.correct = correct;
        this.wrong = wrong;
        this.empty = empty;
    }
}

class Scores {
    constructor(scores) {
        // TODO: answer here
        this.scores = scores;
    }

    topStudents() {
        // TODO: answer here
        let result = []; //menampung hasil pencarian

        for (let j = 0; j < this.scores.length; j++) {
            for (let i = 0; i < this.scores.length - 1; i++) {
              let nilai = 4 * this.scores[i].correct - 1 * this.scores[i].wrong;
              let nextNilai =
                4 * this.scores[i + 1].correct - 1 * this.scores[i + 1].wrong;
       
              // jika nilai yg selanjutnya lebih besar dari yg sebelumnya maka tukar
              if (nextNilai > nilai) {
                let tmp = this.scores[i];
                this.scores[i] = this.scores[i + 1];
                this.scores[i + 1] = tmp;
              }
       
              // tambahkan syarat yg lain kalau jumlah nilainya sama, lihat dari correct nya yg lebih besar
              if (nilai === nextNilai) {

                  // jika nilai sama persis
                    if (this.scores[i].correct === this.scores[i + 1].correct) {
                        // jika nama yg selanjutnya lebih awal maka tukar
                        if (this.scores[i].name > this.scores[i + 1].name) {
                            let tmp = this.scores[i];
                            this.scores[i] = this.scores[i + 1];
                            this.scores[i + 1] = tmp;
                        }
                    } else {
                        // jika correct yg selanjutnya lebih besar maka tukar
                        if (this.scores[i].correct < this.scores[i + 1].correct) {
                            let tmp = this.scores[i];
                            this.scores[i] = this.scores[i + 1];
                            this.scores[i + 1] = tmp;
                        }
                    }
               }
                
            }
          }
       
          const hasilSortingNilai = this.scores;
       
          // ambil namanya saja
          for (let i = 0; i < hasilSortingNilai.length; i++) {
            result.push(hasilSortingNilai[i].name);
          }
       
          return result;
        }
    }
    

// let s = []
// s.push(new Score("Zara", 4, 6, 0)); // score: 4*4 - 6 = 10
// s.push(new Score("Levi", 3, 2, 2)); //score: 3*4 - 2 = 10
// s.push(new Score("Agus", 3, 4, 0)); //score: 3*4 - 4 = 8
// s.push(new Score("Anon", 3, 0, 4)); //score: 3*4 - 0 = 12
// s.push(new Score("Aara", 4, 6, 0)); // score: 4*4 - 6 = 10

// // anon, aara, zara, levi, agus
// let scores = new Scores(s)
// console.log({
//     scorenya: scores.topStudents()
// });

module.exports = {
    Score,
    Scores
}
