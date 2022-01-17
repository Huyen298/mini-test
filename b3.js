let number=[4,5,6,7,8,9,11];
let sum=0;
function primeNumber(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i <number.length ; i++) {
    if (primeNumber(number[i])) {
        sum += number[i]
    }
}
document.write(sum)
