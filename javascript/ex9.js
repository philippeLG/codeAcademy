hungry = true;
foodHere = true;

var eat = function() {
  if (hungry && foodHere) {
      return true
  }
  else {
      return false
  }
};


//
tired = true
bored = false

var nap = function() {
  if ( tired || bored) {
      return true
  }
  else {
      return false
  }
  
};

//
programming = false

var happy = function() {
  if (!programming) {
      return true
  }
  else {
    return false
  }
};
