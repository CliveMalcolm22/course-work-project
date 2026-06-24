/*
  if and else if -> chain
  -> We exist if and else if when we reach the first
  */

  let age = prompt("Enter your age:");
  //
  console.log('age is ${age} typeof ${typeof age}');
  alert('You entered ${age}');
  // age=35
  //35>10 :true->
  if (age > 10) {
    alert("You are a baby.");
  } else if (age > 13) {
    alert("You are a teen.");
  } else if (age > 18) {
    alert("You can legally drink and smoke.");
  } else if (age > 35) {
    alert("Best age for marriage.");
  } else if (age > 45) {
    alert("Best age for retirement.");
  } else if (age > 50) {
    alert("You are an ancestor");
  }


  /*
  if and else if -> chain
  -> We exist if and else if when we reach the first
  */

  let age = prompt("Enter your age:");
  //
  console.log('age is ${age} typeof ${typeof age}');
  alert('You entered ${age}');
  // age=35
  //35>10 :true->
  if (age > 10) {
    alert("You are a baby.");
  } else if (age < 13) {
    alert("You are a teen.");
  } else if (age < 18) {
    alert("You can legally drink and smoke.");
  } else if (age > 35) {
    alert("Best age for marriage.");
  } else if (age > 45) {
    alert("Best age for retirement.");
  } else if (age > 50) {
    alert("You are an ancestor");
  }




  
  if (age > 50) {
    alert("You are an ancestor");
} else if (age > 45) {
    alert("Best age for retirement");
} else if (age > 27) {
    alert("Best age for marriage");
} else if (age > 18) {
    alert("You can legally drink and smoke");
} else if (age > 13) {
    alert("You are a teen");
} else if (age > 10) {
    alert("You are a baby");
}

