const numbertoAccountingString = ((number) => {
    if(number == null) return
    if(number < 0) return `(${Math.abs(number)})`
    return number.toString();
});

var userInput = null;
console.log(numbertoAccountingString(userInput));