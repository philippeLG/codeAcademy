var isEven = function(number) {
    if (isNaN(number)) {
        return "input is not a number";
    }
    else if (number % 2 === 0) {
            return true;
    }
    else {
          return false;
    }
};
