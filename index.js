// latihan 1
function refactor(n) {
  if(n <= 1) {
    console.log('Soal1', 0)
  } else {
    refactor(n-2)
    console.log('Soal1', n)
  } 
}
refactor(8)

// latihan 2
function factorial(n) {
  if(n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log('Soal2', factorial(3))

// latihan 3
function rekursive(n) {
  if(n == 1) {
    return 3
  } else {
    return 2 * rekursive(n-1)
  }
}
console.log('Soal3', rekursive(3))

// latihan 4
function dibagiLimaBelas(n) {
  if(n < 1) {
    return 0 
  } else {
    return 1 + dibagiLimaBelas(n-15)
  }
}

console.log('Soal4', dibagiLimaBelas(1))

// latihan 5
let arr = []

function recArray(number, times) {
  if(number < 1) {
    return [];
  } else {
    arr.push(times)
    recArray(number - 1, times);
    return arr
  }
}

console.log('Soal5', recArray(0))