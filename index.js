function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  this.arg = function() {
        console.log(
            `Your ${this.name} includes: ${this.ingredients.join(', ')}. Yum!`
        );
    };
}
}
//The function again invokes the function
  //passed to it, but uses the `call` method to return the function's this value.
  //(Make sure to correctly pass the third argument!)




//setThisWithApply(fn, thisValue, args)`: Again, invoke the function passed to
//it, change the `this` value of that function passed to it. In addition, we ask
//  you to invoked the passed function with arguments. You should accomplish all of
//the above by using `apply`.

//returnNewFunctionOf(functionToBeCopied, thisValue)
//Here, we ask you to write a function that returns a copy of the 
//function passed through, but sets the  `this` value of the function's copy.