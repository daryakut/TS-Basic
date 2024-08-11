class TypeScript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }
  info(name: string) {
    return `[${name}]: TypeScript version is ${this.version}`;
  }
}
const ts = new TypeScript("4.7");
console.log(ts.info("My Project")); // Выведет: [My Project]: TypeScript version is 4.7

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(model: string) {
    this.model = model;
  }
}

//Альтернативный вариант с модификатором readonly

class Car2 {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}
const car = new Car2("Toyota");
console.log(car.model); // Выведет: Toyota
console.log(car.numberOfWheels); // Выведет: 4

// car.model = "Honda"; // Ошибка: Невозможно присвоить значение, так как model - readonly

class Animal {
  protected voice: string = "";
  public color: string = "black";

  constructor() {
    this.go();
  }

  private go() {
    console.log("Go");
  }
}
class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}
const cat = new Cat();
// cat.voice; // ошибка, только через setVoice
cat.setVoice("meow");

///////////////
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}
//Абстрактный класс Component служит шаблоном для других классов. Он определяет контракт, который должен быть выполнен в дочерних классах — наличие методов render и info.

class AppComponent extends Component {
  render(): void {
    console.log("component on render");
  }
  info(): string {
    return "This is info";
  }
}


const app = new AppComponent();
app.render(); // Выведет: component on render
console.log(app.info()); // Выведет: This is info

//Класс AppComponent наследует абстрактный класс и реализует оба метода, тем самым следуя контракту, установленному Component.
// Ключевая идея: Абстрактные классы позволяют определить общий интерфейс (контракт) для группы связанных классов, оставляя конкретную реализацию на усмотрение каждого конкретного класса-наследника.