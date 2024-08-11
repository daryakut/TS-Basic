function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

function position(): MyPosition; // 1-я перегруженная сигнатура
function position(a: number): MyPositionWithDefault; // 2-я перегруженная сигнатура
function position(a: number, b: number): MyPosition; // 3-я перегруженная сигнатура

// Реализация функции, соответствующая всем перегруженным сигнатурам
function position(a?: number, b?: number): MyPosition | MyPositionWithDefault {
  if (a === undefined && b === undefined) {
    return { x: undefined, y: undefined };
  } else if (a !== undefined && b === undefined) {
    return { x: a, y: undefined, default: a.toString() };
  } else {
    return { x: a, y: b };
  }
}


console.log("Empty ", position());
console.log("1 param ", position(42));
console.log("2 params ", position(10, 14));
