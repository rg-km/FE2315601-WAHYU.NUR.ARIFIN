// Mengembalikan teks yang berkebalikan
//
// contoh: 
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
    // TODO: answer here
    if (str === ""){
        return "";
    }else{
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}

const string = prompt('Masukan teks: ');

const result = reverseString(string);
console.log(result);