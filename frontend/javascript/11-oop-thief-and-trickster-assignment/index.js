// ## Thief

// 1. Class `Thief` yang memiliki properti tambahan job dengan value thief, dan skill tambahan `robbedBlind` berupa function.

// 2. `robbedBlind` memiliki efek mengubah stealChance menjadi 75% dengan membayar 10 gold. 
//    - Apabila gold player (sendiri) kurang dari 10 gold, kembalikan message "Aku terlalu miskin"

// ## Trickster

// 1. Class `Trickster` yang memiliki tambahan job dengan value thief, dan skill `distractionPurse` berupa function.

// 2. `distractionPurse` memiliki efek yaitu, ketika class ini kecurian uang, dia memiliki 25% chance untuk mencuri balik 10 gold.
//    - Apabila total uang lawan kurang dari 10 gold, curi semua uang lawan. Kembalikan message "Berhasil mencuri balik semua uang lawan"
//    - Apabila berhasil uang dan uang lawan lebih dari 10 gold, kembalikan message "Berhasil mencuri balik 10 gold"
//    - Apabila gagal, kembalikan message "Gagal mencuri balik"

// 3. Tedapat getter dan setter untuk mengubah value `DistractionPurse` chance yang dimiliki

// Copy semua logic steal yang sudah kamu tulis di study case sebelumnya dan tambahkan logic untuk mengecek job dari korban pencurian. Apabila korbannya adalah Trickster, maka jalankan skill `distractionPurse` tersebut.
const Player = require("../11-oop-steal-gold-cp/index");

class Thief extends Player {
  constructor(name) {
    super(name);
    this.job = "Thief";
  }
  
  robbedBlind() {
    // TODO: answer here
    if (this.getGold() > 10) {
      this.setGold(this.getGold() - 10);
      this.setStealChance(0.75);
      
      return null;
    }

    return 'Aku terlalu miskin';
  }

  steal(player) {
    // TODO: answer here
    if (player.job = 'Trickster') {
      return player.distractionPurse(this);
    }
    
    if (this.getGold() < 10) {
      return `Aku terlalu miskin`;
    }
    
    this.robbedBlind();
    if (this.randomizer() > this.getStealChance()) {
      return `Gagal mencuri, coba lain kali`;
    }
    
    if (player.getGold() < 5) {
      return `Lawan terlalu miskin`;
    }
    
    this.setGold(this.getGold() + 5);
    
    player.setGold(player.getGold() - 5);
    player.setHasBeenRobbed(true);
    player.robbedBy(this);
    
    // this.setStealChance(0.25);
    return `Berhasil mencuri 5 gold`;
  }
}

class Trickster extends Player {
  constructor(name) {
    super(name);
    this.distractionPurseChance = 0.25;
    this.job = "Trickster";
  }

  setDistractionPurseChance(chance) {
    // TODO: answer here
    this.distractionPurseChance = chance;
  }

  getDistractionPurseChance() {
    // TODO: answer here
    return this.distractionPurseChance;
  }

  setHasBeenRobbed(status) {
    this.hasBeenRobbed = status;
    // this.distractionPurse(this.culprit);
  }

  distractionPurse(player) {
    if (this.randomizer() > this.getDistractionPurseChance()) {
      return `Gagal mencuri balik`;
    }

    if (player.getGold() < 10) {
      this.setGold(this.getGold() + player.getGold());
      player.setGold(0);
      player.setHasBeenRobbed(true);
      player.robbedBy(this);

      return `Berhasil mencuri balik semua uang lawan`;
    }

    this.setGold(this.getGold() + 10);
    player.setGold(player.getGold() - 10);
        
    return `Berhasil mencuri balik 10 gold`;
  }

  steal(player) {
    // TODO: answer here
    if (this.randomizer() > this.getStealChance()) {
      return `Gagal mencuri, coba lain kali`;
    }

    if (player.getGold() < 5) {
      return `Lawan terlalu miskin`;
    }

    player.setGold(player.getGold() - 5);
    player.setHasBeenRobbed(true);
    player.robbedBy(this);
    this.setGold(this.getGold() + 5);

    return `Berhasil mencuri 5 gold`;
  }
}

const p1 = new Thief("Fauzan");
const p2 = new Trickster("Tegar");

// p1.setGold(4);
// p2.setGold(30);



console.log('\n========Trickster dan thief==========');
console.log('Jumlah gold Thief 1: ' + p1.getGold())
console.log('Jumlah gold Trickster 2: ' + p2.getGold())

p1.setStealChance(1);
p2.setDistractionPurseChance(1);
const message = p1.steal(p2);

console.log('message : ' + message);
// console.log(p1.steal(p2));
console.log('Total gold Thief 1: ' + p1.getGold())
console.log('Total gold Trickster 2: ' + p2.getGold())


// Dilarang menghapus code dibawah ini!!!
module.exports = {
  Thief,
  Trickster,
};
