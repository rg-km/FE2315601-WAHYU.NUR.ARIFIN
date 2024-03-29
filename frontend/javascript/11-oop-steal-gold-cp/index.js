// Buat method `steal` yang menerima param Player (player lawan/ player lain). Lakukan steal randomizer berdasarkan `stealChance`.
//    - Jika berhasil, player lawan kehilangan 5 gold dan gold player (sendiri) bertambah 5 gold dan kembalikan message "Berhasil mencuri 5 gold".
//    - Jika gagal, kembalikan message "Gagal mencuri, coba lain kali"
//    - Jika gold lawan lebih kecil dari 5 gold, steal gagal dengan message "Lawan terlalu miskin"
class Player {
  constructor(name) {
    this.name = name;
    this.gold = 50;
    this.stealChance = 0.25;
    this.hasBeenRobbed = false;
    this.culprit = null;
  }


  getGold() {
  // TODO: answer here
    return this.gold;
  }

  setGold(gold) {
  // TODO: answer here
    this.gold = gold;
  }

  getStealChance() {
  // TODO: answer here
    return this.stealChance;
  }

  setStealChance(chance) {
  // TODO: answer here
    return this.stealChance = chance;
  }

  getHasBeenRobbed() {
    return this.hasBeenRobbed;
  }
  
  setHasBeenRobbed(status) {
    this.hasBeenRobbed = status;
  }

  // robbedBy(culprit){
  //   this.culprit = culprit;
  // }
  
  randomizer() {
    return +Math.random().toFixed(2);
  }
  
  steal(player) {
    // TODO: answer here
    if (this.randomizer() < this.getStealChance()) {
      player.setGold(player.getGold() - 5);
      player.setHasBeenRobbed(true);
      player.robbedBy(this);
      this.setGold(this.getGold() + 5);

      return `Berhasil mencuri 5 gold`;

    } else if (player.getGold() < 5) {
      return `Lawan terlalu miskin`;
      
    } else {
      return `Gagal mencuri, coba lain kali`;
    } 
    
  }
}

const p1 = new Player("Fauzan");
const p2 = new Player("Tegar");

console.log('Jumlah gold Player 1: ' + p1.getGold())
console.log('Jumlah gold Player 2: ' + p2.getGold())
console.log(p1.steal(p2));
console.log('Total gold Player 1: ' + p1.getGold())
console.log('Total gold Player 2: ' + p2.getGold())

module.exports = Player;
