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
