// 브론즈

// 1) 어떤 값을 받으면 값을 출력해주는 함수
function print(num) {
    console.log(num);
  }
  print(10);


// 2) 3개의 정수를 받아서 3개 모두 빼주는 함수
function minus(num1, num2, num3) {
    return num1 - num2 - num3;
  }

let result = minus(50,10,20);
console.log(result);


// 실버
// 홍길동을 n번 출력해주는 함수
function hong(n) {
  for (let i = 0; i < n; i++) {
    console.log("홍길동");
  }
}

hong(3);


// n번까지 모두 더해주는 함수
function sum(n) {
  let total = 0; 
  for (let i = 1; i <= n; i++) { 
    total += i; 
  }
  console.log(total); 
}
sum(5);


// 골드 
// 1~n까지 홀수만 출력해주는 함수
function odd(n) {
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
}

odd(5);


// 1~n까지 4의 배수만 더해주는 함수
function add(n) {
  let result = 0; 
  for (let i = 1; i <= n; i++) { 
    if(i % 4 === 0);
    result += i; 
  }
  console.log(result); 
}

add(10);



// 플레티넘

// 1. Number()로 문자열을 숫자로 변환
// 2. parseInt()로 문자열을 숫자로 변환
// 3. parseFloat()로 문자열을 숫자로 변환


// 문자열을 받아서 원하는 문자의 개수를 구해주는 함수
function getCount(content, char) {
  let count = 0;

  for(let i = 0; 0 < content.legnth; i++) {
    content.charAt(i) == char && count++
  }
  retunr count;
}

let result = getCount("abcd", "a")
onsole.log(result);


// 한글을 정수로 바꿔주는 함수 ("일공이사" -> 1024)
function changeToTnteger(hangle) {
  let hangles = "공일이삼사오육칠팔구";
  for(let i = 0; 0 < hangle.length; i++) {
    result += hangles.indexOf(hangle.charAt(i));
  }
  return result;
}

let result2 = changeToTnteger("공일이삼")
console.log(result2);



// 정수를 한글로 바꿔주는 함수 ("1024" -> "일공이사")
function changeToTnteger(hangle) {
  let hangles = "공일이삼사오육칠팔구", result = "";
  for(let i = 0; 0 < hangle.length; i++) {
    result += hangles.charAt(hangle.charAt(i));
  }
  return result;
}

let result3 = changeToTnteger("공일이삼")
console.log(result3);



// *******************************************************

//강사님 코드
// 40분
// 브론즈
// 1) 어떤 값을 받으면 값을 출력해주는 함수
// 2) 3개의 정수를 받아서 3개 모두 빼주는 함수
function print(value){
  console.log(value);
}

function subtractAll(num1, num2, num3){
  return num1 - num2 - num3;
}

// 실버
// 홍길동을 n번 출력해주는 함수
let limit = 5;
function printHongToLimit(limit){
  let hong = "홍길동";
  for(let i = 0; i < limit; i++){
    console.log(hong);
  }
}

// n번까지 모두 더해주는 함수
function sumAll(...numbers){
  let result = 0;
  for(let i = 0; i < numbers.length; i++){
    result += numbers[i]
  }
  return result;
}

// 골드 
// 1~n까지 홀수만 출력해주는 함수
function printOdd(limit){
  for(let i = 0; i < limit; i++){
    let odd = i % 2 == 1;
    odd && console.log(i)
  }
}

// 1~n까지 4의 배수만 더해주는 함수
function sumFourTimes(limit){
  let result = 0;
  for(let i = 0; i < limit; i++){
    let fourTimes = i % 4 === 0;
    fourTimes ? result += i : i;
    // if(fourTimes){ result += i; };
    // if(!fourTimes){ continue; }
    // result += i
  }
  return result;
}


