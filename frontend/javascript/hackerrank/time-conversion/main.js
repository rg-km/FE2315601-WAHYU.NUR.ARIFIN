// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  // TODO: answer here
  let ampm = s.charAt(8);
  let newHour = "";

  if (ampm === 'P') {
    if (s.substring(0, 2) === '12') {
      newHour = s.substring(0, 2);
    }else{
      newHour = parseInt(s.substring(0, 2)) + 12;
  }
  }else{
    if (s.substring(0, 2) === '12') {
      newHour = '00';
    }else{
      newHour = s.substring(0, 2);
    }
  }
  return newHour + s.substring(2, 8);
}

function main() {
  //var s = readLine();
  var s = '07:05:45PM'; // override input
  var result = timeConversion(s);
  console.log(result);

}

main(); // execute program

module.exports = timeConversion