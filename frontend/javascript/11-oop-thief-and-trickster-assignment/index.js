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
    if(this.getGold() < 10) {

      return 'Aku terlalu miskin';
    }else{
      
      this.setGold(this.getGold() - 10);
      this.setStealChance(0.75);
  
      return 'Berhasil mencuri 10 gold';
    }
  }

  steal(player) {
    // TODO: answer here
    if(player.getGold() < 5) {

      return 'Lawan terlalu miskin';
    }
    const random = this.randomizer();

    if (random <= this.getStealChance()) {
      player.setGold(player.getGold() - 5);
      this.setGold(this.getGold() + 5);
      player.setHasBeenRobbed(true);

      if(player.job === 'Trickster') {
        return player.distractionPurse(this);
      }

      return 'Berhasil mencuri 5 gold';

    }else{
      player.setHasBeenRobbed(false);
      return 'Gagal mencuri, coba lain kali';
    }
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
    const rng = this.randomizer();
    if (rng <= this.getDistractionPurseChance()) {
      if (player.getGold() < 10) {
        player.setGold(0)
        this.setGold(this.getGold() + player.getGold());

        return 'Berhasil mencuri balik semua uang lawan';

      } else {
        player.setGold(player.getGold() - 10);
        this.setGold(this.getGold() + 10);

        return 'Berhasil mencuri balik 10 gold';
      }

    } else {
      return 'Gagal mencuri balik';
    }
  }

  steal(player) {
    // TODO: answer here
    if(player.getGold() < 5) {
      return 'Lawan terlalu miskin';
    }

    let randomize = this.randomizer();
    if (randomize < this.getStealChance()) {
      player.setGold(player.getGold() - 5);
      player.setHasBeenRobbed(true);
      this.setGold(this.getGold() + 5);
      if(player.job === 'Trickster') {
        return player.distractionPurse(this);
      }
      return 'Berhasil mencuri 5 gold';
    }else{
      return 'Gagal mencuri, coba lain kali';
    }
  }
}

// Dilarang menghapus code dibawah ini!!!
module.exports = {
  Thief,
  Trickster,
};
