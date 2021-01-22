
function kilometerToMeter(kiloMeter){
    if(kiloMeter < 0){
        return " Negativ input not accepted! ";
    }else if(kiloMeter == 0){
        return " You are not moved!";
    }else{
        meter = kiloMeter * 1000;
        return meter;
    }
    
}
// var result = kilometerToMeter(-1);
// console.log(result);



function budgetCalculator( watchQuantity, mobileQuantity, laptopQuantity){
    if( watchQuantity < 0 ){
        return " Negativ input not accepted in budget! ";
    }if( mobileQuantity < 0 ){
        return " Negativ input not accepted in budget! ";
    }else if( laptopQuantity < 0 ){
        return " Negativ input not accepted in budget! ";
    }else {
        var watchBudget  = watchQuantity * 50;
        var mobileBudget = mobileQuantity * 100;
        var laptopBudget = laptopQuantity * 500;
        var totalBudget = watchBudget + mobileBudget + laptopBudget;
        return totalBudget;
    }   
}
// var result = budgetCalculator(0, 3, 3);
// console.log(result);




function hotelCost(totalDays){
    if(totalDays == 0){
        return "You are just entered in hotel";
    }else if(totalDays<0){
        return "You are not stay in hotel! Please provide positive value.";
    }else if(totalDays<=10){
        var rent = totalDays * 100;
        return rent;
    }else if(totalDays<=20){
        var remainDays = totalDays - 10;
        var rentSlubOne = 10 * 100;
        var rentSlubTwo = remainDays * 80; 
        var rent = rentSlubOne + rentSlubTwo;
        return rent;
    }else if(totalDays>20){
        var remainDays = totalDays - 20;
        var rentSlubOne = 10 * 100;
        var rentSlubTwo = 20 * 80;
        var rentSlubThree = remainDays * 50; 
        var rent = rentSlubOne + rentSlubTwo + rentSlubThree;
        return rent;
    } 
}
// var result = hotelCost(-1);
// console.log(result);




var friendsNameArray = ['masud','sani','azharul','jamalurrahman','jamalurrahmankhan'];
//var friendsNameArray = [];

function megaFriend(friendsNameArray){
    if(friendsNameArray.length<=0){
        return "array is empty";
    }else{
        var longName = friendsNameArray[0];
        for(i=0;i<friendsNameArray.length;i++){
            var nextName = friendsNameArray[i];
            if(nextName.length>longName.length){
                longName = nextName;
            }
        }
        return longName;
    }
}
var result = megaFriend(friendsNameArray);
console.log(result);


