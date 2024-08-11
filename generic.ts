const arrayOfNumber: Array<number> = [1, 2, 3];
const arrayOfStrings: Array<string> = ["q", "w"];

// Примечание: Array<number> и number[] в TypeScript являются эквивалентами. Вы можете использовать любой из этих синтаксисов, в зависимости от предпочтений или необходимости.

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}
reverse(arrayOfNumber);
reverse(arrayOfStrings);
