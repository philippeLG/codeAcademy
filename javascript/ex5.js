var loop = function(){
    var i = 0
	while(i<3){
		console.log("I'm looping!")
		i++
	}
};

loop();

//
var soloLoop = function(){
  var cond = true
  while (cond) {
      console.log("Looped once!");
      cond = false;
  }
  
};

soloLoop();

//
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
	} while (loopCondition);

