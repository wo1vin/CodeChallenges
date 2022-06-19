/* Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx). */
function hello(name) {
    //PREP
    //P: capitalized name string no typos, no other types
    //R: specified string based on input
    //E: Bob -> "Hello, Bob!"
    //P: passing in a name, fix any typos in the capitalization and
    // check if name is empty to return "Hello, World!" otherwise return "Hello, Xxxx"\
    if(name){
      return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
    } else {
      return 'Hello, World!';
  }
    }