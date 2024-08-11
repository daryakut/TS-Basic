interface Rect {
  readonly id: string; //нельзя менять
  color?: string; //необязательно
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "123",
  size: {
    width: 20,
    height: 30,
  },
  color: "#ccc",
};
const rect2: Rect = {
  id: "12223",
  size: {
    width: 220,
    height: 320,
  },
};
const rect3 = {} as Rect;
const rect4 = <Rect>{};

/////////////////////////////
interface ReactWithArea extends Rect {
  getArea: () => number;
}

const rect5: ReactWithArea = {
  id: "123",
  size: {
    width: 220,
    height: 320,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

///////////////////
interface IClock {
  time: Date;
  setTime(date: Date): void;
}
class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

interface ICar {
  make: string;
  year: number;
}

// class Car implements ICar {
//   make: string;
//   year: number;

//   ride() {
//     console.log("Car of make " + this.make + " rides");
//   }

//   constructor(make: string, year: number) {
//     this.make = make;
//     this.year = year;
//   }
// }

// const beha = new Car("BMW", 2015);
// const zapor = new Car("Zaporozhenc", 1990);

// console.log(beha, zapor);
// beha.ride();



const myClock = new Clock();
const c2 = new Clock();
console.log(myClock);
console.log(c2);

//////////////

interface Styles {
  [key: string | number]: string | number;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
  5: 7,
};

// interface Styles — интерфейс с индексируемыми свойствами. Это означает, что в объекте, соответствующем интерфейсу Styles, ключи могут быть произвольными строками, а значения — строками.
// css: Styles — объект css, представляющий набор CSS-стилей, где каждый ключ (имя свойства CSS) — это строка, и каждое значение — строка, представляющая значение этого свойства.
