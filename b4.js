let sum=0;
function primeNumber(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
for (let i = 2; i <500 ; i++) {

    if (primeNumber(i)==true) {
        sum += primeNumber[i]
    }
}
document.write(sum)