interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

// OK
// mySearch = function(source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

// OK
// mySearch = function(src: string, sub: string) {
//   let result = src.search(sub);
//   return result > -1;
// }

// OK
mySearch = function(src, sub) {
  let result = src.search(sub);
  return result > -1;
}

// NG
// mySearch = function(src, sub) {
//   let result = src.search(sub);
//   return "string";
// }
