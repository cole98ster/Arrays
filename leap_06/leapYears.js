const leapYears = function(year) {
    const divisibleByFour = year % 4 === 0;
    if (divisibleByFour){
        return true
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;