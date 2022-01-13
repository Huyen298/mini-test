let number=[2,5,3,7,9,1,4,8];
let ketqua;
count=0;
for (let i = 0; i < number.length; i++) {
   if (number[i]%2==0){
       count+=1
       ketqua=number[i]
       document.write("so chan trong mang la" +ketqua+ "<br/>")

}
}
document.write("tong so chan trong mang la" +count)