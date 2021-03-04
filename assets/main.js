function calc(){
    
    let inn = innInput.value.split('').map(i=>Number(i));
    
    let coefficients = [-1, 5, 7, 9, 4, 6, 10, 5, 7];
    
    let num = inn.slice(0,9);
  
    let control=inn.slice(-1);
    
    let genderNumber = inn.slice(8,9);

    let summ = num.reduce(function(r,a,i){return r+a*coefficients[i]},0);
    
    let controlNumber = summ % 11;
        
    let checkResult;
    
    let genderResult;
    
        if(controlNumber>9){
            controlNumber=(summ % 11) % 10;
        }

        if (genderNumber % 2 == 0) {
            genderResult=("Обладатель данного ИИН - женщина");
        } else {
            genderResult=("Обладатель данного ИИН - мужчина");
        }
            
        if(controlNumber == control){
            checkResult=("Действительный ИНН");
        } 
        else {
            checkResult=("ИИН не является действительным");
            genderResult=("-");
        }
    
        check.innerHTML=checkResult;
        gender.innerHTML=genderResult;
    }
