interface SquareConfig {
  color?: string;
  width?: number;
  // [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

// let mySquare = createSquare({ colour: "red", width: 100 });

// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// let squareOptions = { colour: "red" };
// let mySquare = createSquare(squareOptions);
