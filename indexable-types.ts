interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];


interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}

interface NumberDisctionary {
  [index: string]: number;
  length: number;
  // error, the type of 'name' is not a subtype of the indexer
  name: string;
}

// OK
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}


interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myReadOnlyArray: ReadonlyStringArray = ["Alice", "Bob"];
myReadOnlyArray[2] = "Mallory";
