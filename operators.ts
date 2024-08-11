interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // "name" | "age"
let key: PersonKeys = "name";
key = "age";

//interface Person описывает объект с двумя свойствами: name (строка) и age (число).
// keyof Person — это специальный тип, который извлекает все ключи интерфейса Person, в данном случае это "name" | "age".
// Переменная key типа PersonKeys может принимать только значения "name" или "age", так как это ключи интерфейса Person.

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};
type UserKeysNoMeta = Exclude<keyof User, "_id" | "createdAt">; //name, email

// type User описывает объект пользователя с четырьмя свойствами: _id, name, email и createdAt.
// keyof User извлекает ключи типа User: "_id" | "name" | "email" | "createdAt".
// Exclude<keyof User, "_id" | "createdAt"> создает тип, который включает все ключи User, кроме указанных в списке (в данном случае _id и createdAt). В результате тип UserKeysNoMeta будет включать только "name" и "email".
// Pick<User, "name" | "email"> создает новый тип, который включает только те свойства User, которые указаны в списке — "name" и "email". В результате UserKeysNoMeta2 будет типом объекта { name: string; email: string }.


type UserKeysNoMeta2 = Pick<User, "name" | "email">; //name, email

let ul:UserKeysNoMeta = "name";
// ul = "_id" ошибка, можем задавать только name, email
