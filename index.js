console.log("lesson1");
function tinhBMI(mass,height) {
    return Math.round((mass/ (height ** 2))*10)/10;
}

var MarksWeight = 78;
var MarksHigher = 1.69;
var JohnWeight = 92;
var JohnHigher =1.95;

var MarksWeight2 = 95;
var MarksHigher2 = 1.88;
var JohnWeight2 = 85;
var JohnHigher2 =1.76;



let MarkHigherJonh = tinhBMI(MarksWeight,MarksHigher) > tinhBMI(JohnWeight,JohnHigher);
let MarkHigherJonh2  = tinhBMI(MarksWeight2,MarksHigher2)> tinhBMI(JohnWeight2,JohnHigher2);
console.log("Data Sample 1");
console.log("BMI for Mark"+ tinhBMI(MarksWeight,MarksHigher));
console.log("BMI for John"+tinhBMI(JohnWeight,JohnHigher));
console.log("Ket Qua Khi So Sanh John va Marks :"+MarkHigherJonh);

console.log("Data Sample 2");
console.log("BMI for Mark"+ tinhBMI(MarksWeight2,MarksHigher2));
console.log("BMI for John"+tinhBMI(JohnWeight2,JohnHigher2));
console.log("Ket Qua Khi So Sanh John va Marks :"+MarkHigherJonh2);
console.log("lesson2");

function soSanhJohn(BMIJohn,BMIMark) {
    if(MarkHigherJonh = tinhBMI(MarksWeight,MarksHigher) > tinhBMI(JohnWeight,JohnHigher)){
        console.log("Mark's BMI is higher than John's!");
    }else{
        console.log("Jonn's BMI is higher than Mark's!");
    }
}
console.log("Cau 1");
var BMIMark = Math.round(tinhBMI(MarksWeight,MarksHigher)*10)/10
var BMIJohn =Math.round(tinhBMI(JohnWeight,JohnHigher)*10)/10
console.log("BMI for Mark: "+ BMIMark);
console.log("BMI for John: "+ BMIJohn);

soSanhJohn(BMIJohn,BMIMark)

console.log("Cau 2");
if(MarkHigherJonh = tinhBMI(MarksWeight,MarksHigher) > tinhBMI(JohnWeight,JohnHigher)){
    console.log("Mark's BIM ("+tinhBMI(MarksWeight,MarksHigher)+") is higher than John's ("+ tinhBMI(JohnWeight,JohnHigher)+")!");

}else{
    console.log("John's BIM ("+ tinhBMI(JohnWeight,JohnHigher)+") is higher than Mark's ("+tinhBMI(MarksWeight,MarksHigher)+")!");
}
console.log("lesson 3");

var dolphinScore1 = 96
var dolphinScore2 = 108
var dolphinScore3 = 89

var KoalasScore1 = 88
var KoalasScore2= 91
var KoalasScore3 = 110

function tinhTrungBinh(score1,score2,score3) {
    return (score1+score2+score3)/3
}

console.log("Cau 1 voi Data 1");
var trungBinhCaHeo = tinhTrungBinh(dolphinScore1,dolphinScore2,dolphinScore3)
var trungBinhGauTui = tinhTrungBinh(KoalasScore1,KoalasScore2,KoalasScore3)
console.log("Diem Trung Binh Cua Ca Heo: "+trungBinhCaHeo);
console.log("Diem Trung Binh cua Gau Tui: "+trungBinhGauTui);


console.log("Cau 2");
function soSanhDiemThi(tbDoi1,tbDoi2) {
    if(flag= tbDoi1>tbDoi2){
        console.log("Dolphin win");
    }else{
        console.log("Koalas win");
    }
}
soSanhDiemThi(trungBinhCaHeo,trungBinhGauTui)

console.log("Cau 3");

if(trungBinhCaHeo>trungBinhGauTui &&trungBinhCaHeo >=100){
    console.log("Dolphin win");
}else if(trungBinhCaHeo>trungBinhGauTui &&trungBinhCaHeo <100){
    console.log("Dolphin win nhung khong nhan phan thuong 1");
}else if(trungBinhCaHeo<trungBinhGauTui&&trungBinhGauTui>=100){
    console.log("Koalas Win");
}else if(trungBinhCaHeo<trungBinhGauTui&&trungBinhGauTui<100){
    console.log("Koalas win nhung khong nhan phan thuong 1");
}

console.log("Cau 4");
if(trungBinhCaHeo>trungBinhGauTui &&trungBinhCaHeo >=100){
    console.log("Dolphin win");
}else if(trungBinhCaHeo>trungBinhGauTui &&trungBinhCaHeo <100){
    console.log("Dolphin win nhung khong nhan phan thuong 1");
}else if(trungBinhCaHeo<trungBinhGauTui&&trungBinhGauTui>=100){
    console.log("Koalas Win");
}else if(trungBinhCaHeo<trungBinhGauTui&&trungBinhGauTui<100){
    console.log("Koalas win nhung khong nhan phan thuong 1");
}else if(trungBinhCaHeo==trungBinhGauTui&& trungBinhCaHeo>=100 && trungBinhGauTui >=100){
    console.log("Hoa");
}