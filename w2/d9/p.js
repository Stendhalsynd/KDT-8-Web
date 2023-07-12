function solution(numbers) {
  var answer = 0;

  let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let element of list) {
    if (!numbers.includes(element)) answer += element;
  }
  return answer;
}

let numbers = [1, 2, 3, 4, 6, 7, 8, 0];

console.log(solution(numbers));
