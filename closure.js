function takeSecret(secret) {

// secret is out here
// other stuff
  return function readSecret(password) {
    if(password === "password") {
      return secret;
    }else {
      return "Hint, try another PASSWORD";
    }
  };
}


let passwordProtectedSecret = takeSecret("I like doritos");
console.log(passwordProtectedSecret);
console.log(passwordProtectedSecret("sadsf"));
console.log(passwordProtectedSecret("password"));
