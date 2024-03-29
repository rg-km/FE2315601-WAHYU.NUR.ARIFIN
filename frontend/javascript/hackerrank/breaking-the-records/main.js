// Breaking the Records
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  // Write your code here
  // TODO: answer here
  let min = scores[0];
  let max = scores[0];
  let countMin = 0;
  let countMax = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
      countMax++;
    }
    if (scores[i] < min) {
      min = scores[i];
      countMin++;
    }
  }
  return [countMax, countMin];
  
}

function main() {
  //     var n = parseInt(readLine());
  //     s = readLine().split(' ');
  //     s = s.map(Number);
  var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]; // override input
  var result = breakingRecords(scores);
  console.log(result.join(' ') + '\n')

}

main(); // execute program

module.exports = breakingRecords