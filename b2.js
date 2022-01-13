
let nhap= prompt("Hay nhap so vào day")
let number=[2,5,7,4,3,5,5];
count=0;
for (let i = 0; i < number.length; i++) {
    if (nhap==number[i]){
        count+=1
    }
}
alert("so vua nhap co"+ count+"phan tu trong mang")
alert("khong co phan tu nao")