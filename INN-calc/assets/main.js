function calc(){
    
let inn = innInput.value.split('').map(i=>Number(i));

let coefficients = [-1, 5, 7, 9, 4, 6, 10, 5, 7];

let num = inn.slice(0,9);

let control=inn.slice(-1);

let genderNumber = inn.slice(8,9);

let summ = num.reduce(function(r,a,i){return r+a*coefficients[i]},0);

let controlNumber = summ % 11;

console.log(controlNumber);

let checkResult;

let genderResult;

    if(controlNumber>9){
        controlNumber=(summ % 11) % 10;
    }

    if(controlNumber == control && genderNumber % 2 == 0){
        checkResult=("Действительный ИНН");
        genderResult=("Обладатель данного ИИН - женщина");
    } 
    if (controlNumber == control && genderNumber % 2 == 1) {
        checkResult=("Действительный ИНН");
        genderResult=("Обладатель данного ИИН - мужчина");
    } else {
        checkResult=("Введенный ИИН не является действительным");
        genderResult=("ИИН не является действительным");
    }

    check.innerHTML=checkResult;
    gender.innerHTML=genderResult;
}


