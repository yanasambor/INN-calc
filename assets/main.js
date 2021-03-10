function calc(){
    
    let inn = innInput.value.split('').map(i=>Number(i));
    
    let coefficients = [-1, 5, 7, 9, 4, 6, 10, 5, 7];
    
    let num = inn.slice(0,9);

    let birthdayCheck = +inn.slice(0,5).join('');

    let birthData = new Date (1899, 11, 31);

    birthData.setDate(birthData.getDate()+ birthdayCheck);

    let birthdayFormat = birthData.toLocaleDateString('ru-RU')

    let today = Date.now();

    let now = new Date(today);

    let age = Math.floor((now - birthData)/31536000000.4);

    let summ = num.reduce(function(r,a,i){return r+a*coefficients[i]},0);
    
    let controlNumber = summ % 11;
        
    let checkResult;
    
    let genderResult;
    
        if(controlNumber>9){
            controlNumber=(summ % 11) % 10;
        }

        if (inn[8] % 2 == 0) {
            genderResult=("Обладатель данного ИИН - женщина");
        } else {
            genderResult=("Обладатель данного ИИН - мужчина");
        }
            
        if(controlNumber == inn[9]){
            checkResult=("Действительный ИНН");
        } 
        else {
            checkResult=("ИИН не является действительным");
            genderResult=("-");
            birthdayFormat=("-");
            age=("-");
        }
    
        check.innerHTML=checkResult;
        gender.innerHTML=genderResult;
        birthday.innerHTML=birthdayFormat;
        fullAge.innerHTML=age;

    }
