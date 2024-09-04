// function add(num1, num2) {
//   return num1 + num2;
// }

// let result = add(10, 20);
// console.log(result);

// //디폴트 파라미터
// function sum(num1, num2, num3 = 0) {
//   return num1 + num2 + num3;
// }


//실습
//1) 숫자 5개를 받아서 5개를 모두 출력하는 함수
// function print(num1, num2, num3, num4, num5) {
//   console.log(num1, num2, num3, num4, num5);
// }

// print(10, 20, 30, 40, 50)
// function initialValue() {
//   return "";
// }

//2) 2개 문자열을 연결시켜주는 함수
// function message(str1, str2 = "") {
//   return str1 + str2;
// }

// let result2 = message("이진아","짱");
// console.log(result2);



//사용자가 파라미터로 입력한 값을 모두 더하기
//rest parameter(가변인자)
// function addAll(...numbers){
//   console.log(numbers);
//   console.log(numbers[3]);
// }

// addAll(10, 20, 30, 40, 50)



//가변 인자로 이름, 나이, 이메일을 입력받아서 출력하기
function message(...total) {
  let name, age, email = total;
  return `Name: ${name}`, `Age: ${age}`, `Email: ${email}`;
}

let result = message("이진아", "20", "naver.com");
console.log(result); 


//가변인자로 사용자가 입력한 값을 모두 더해서 값을 주는 함수

