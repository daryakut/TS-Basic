function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.trim();
}
//Функция strip умеет работать как со строками, так и с числами, выполняя разные действия в зависимости от типа данных:

// Если передано число, функция возвращает строку с числом, отформатированным до двух знаков после запятой.
// Если передана строка, функция возвращает строку, очищенную от пробелов по краям.

console.log(strip(123.456)); // Выведет: "123.46" (строка с числом, отформатированным до двух знаков после запятой)
console.log(strip("  Hello World  ")); // Выведет: "Hello World" (строка без пробелов в начале и в конце)

class MyResponse {
  header = "response header";
  result = "response result";
}
class MyError {
  header = "error header";
  message = "error message";
}
function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    };
  } else {
    return {
      info: res.header + res.message,
    };
  }
}
//Объединение типов: Возможность принимать в функцию разные типы данных.
// instanceof: Использование для проверки, был ли объект создан с помощью определенного класса.
// Сужение типов: TypeScript понимает, какой тип данных используется после проверки с instanceof, и позволяет обращаться только к соответствующим свойствам этого типа.

type AlertType = "success" | "warning" | "danger";

function setAlertType(type: AlertType) {
  
}
setAlertType("success")
setAlertType("warning");
// setAlertType("default"); error, нет такого типа
