const isFetsching: boolean = true;
const numberArr: number[] = [1, 2, 3, 4];
const numberArr2: Array<number> = [1, 2, 3, 4];

//Tuple

const contact: [string, number] = ["Vasja", 123];

//any
let variable: any = 42;
//...
variable = "s";
variable = [];

//functions
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("vasya");

//never
// function throwError(message: string): never { ... } — функция throwError принимает строку в качестве аргумента и всегда завершает работу, выбрасывая исключение. Тип never используется для обозначения функции, которая никогда не возвращает значение, поскольку она всегда выбрасывает ошибку или бесконечно выполняется.
// function infinite(): never { ... } — функция infinite бесконечно выполняется в цикле while (true) {}, и поэтому тоже имеет тип never, так как она никогда не завершит выполнение.
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}
//type
type Login = string;
const login: Login = "admin";
// const login2: Login = 2; //error

type ID = string | number;
const id1: ID = 123;
const id2: ID = "fgjfhg";
