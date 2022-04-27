// Salah satu problem populer yang dapat diselesaikan dengan menggunakan Stack adalah mengecek validitas tanda kurung.
// Diberikan sebuah string yang hanya terdapat karakter '(', ')', '{', '}', '[', dan ']'.
// Tentukan apakah sebuah string merupakan sekumpulan tanda kurung yang valid.
// String tanda kurung yang valid adalah

// 1. Tanda kurung buka harus ditutup oleh pasangannya.
// 2. Tanda kurung buka harus ditutup di urutan yang benar.

// | Contoh ke | Input | Output | Penjelasan |
// | --- | --- | --- | --- |
// | 1 | "()" | true | tanda kurung buka '(' ditutup dengan pasangannya yaitu ')' |
// | 2 | "{)" | false | tanda kurung buka '{' tidak ditutup oleh pasangannya |
// | 3 | "([])" | true | tanda kurung buka ditutup dengan pasangannya dan sesuai dengan urutan |

const Stack = require('./stack')

function IsValidParentheses(s) {
    // TODO: answer here
    let stack = new Stack()
    let validation = { '(': ')', '{': '}', '[': ']' }

    if (s.length == 0) { // jika string kosong
        return false
    }

    //bila diberi hanya parenthess yg tertutup
    if (s.length % 2 != 0) {
        return false
    }

    // looping untuk mengecek setiap karakter
    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        if (validation[char]) { // jika char buka kurung
            stack.push(s[i])

        } else if (validation[stack.peek()] === char) { 
            stack.pop()

        } else { 
            return false
        }
    }
    return stack.top === -1
}

module.exports = {
    IsValidParentheses
}