
// This is an example of closure. 
// ChildFunction has access to the scope of parent (Lexical Scoping). Even when the parent returned child function and stopped executing itself. 
// Child function still had access to the parent variable. This is closure. Lexical scoping is an important part of closure 

let x = 1; 

// This method has access to the global variable x and its local variable localParent. 
const parent = () => {
  let localParent = 2;
  console.log(x); // Prints 1 
  console.log(localParent); // Prints 2
  
  // Specifies a child function which also has access to its parent and the global state (Lexical Scoping Duh!)
  const childFunction = () => {
    console.log(x+=5);
    console.log(localParent+=1);
  };
  // The function does not call the child function but returns it to be called by whoever invoked the function. (This is important step)
  return childFunction;
}

const returnedChild = parent(); // At this point the parent function stopped executing and the scope is gone. 
// Prepare to be surprised. The child function returned by the parent() still has aceess to its paren't scope even after the parent function has stopped executing 
returnedChild(); // Prints 6 & 3 Wow
returnedChild(); // Prints 11 & 4 Crazy isn't it ?


// Example using IIFE. Same concept as above
const IIFE = (()=>{
	let localIIFE = 3;
  console.log("Initial Function Value: ", localIIFE); //This is only gets printed once becuase the parent only executed once. 
  Infact we just execute the the following returned function while preserving the scope and context using closures 

  return ()=>{
  	localIIFE -=1;
    console.log(localIIFE);
  }
})();


IIFE(); // prints 2 
IIFE(); // prints 1
IIFE(); // prints 0
