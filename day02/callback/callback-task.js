// 2) 성과 이름을 받아서 연결하고 출력하기
// const connection = (str1, str2, callback) => {
//   callback(str1 + str2);
//   }
//   const print = (value) => {
//     console.log(value);
//   }
//   adconnectiond("이","진아",print);



// 3) 두 정수의 곱셈 결과를 출력하기
// const multi = (num1, num2, callback) => {
// callback(num1 * num2);
// }
// const print = (value) => {
//   console.log(value);
// }
// multi(10,20,print);



// 4) 성과 이름을 받아서 000님 환영합니다. 출력하기
// const welcome = (str1, str2, str3, callback) => {
//   callback(str1 + str2 + str3);
//   }
//   const print = (value) => {
//     console.log(value);
//   }
//   welcome("이","진아","님 환영합니다",print);


// 강사님 코드 
/* 실습
function print(value){
  console.log(value);
}

// 1) 두 수를 더해서 출력하기
const sum = (num1, num2, callback) => {
  callback(num1 + num2);
}

sum(10, 20, print)

// 2) 성과 이름을 받아서 연결하고 출력하기
const getFullName = (lastName, firstName, callback) => {
  callback(lastName + firstName)
}
getFullName("김", "세환", print)


// 3) 두 정수의 곱셈 결과를 출력하기
const mul = (num1, num2, callback) => {
  callback(num1 * num2)
}

mul(10, 20, print)

// 4) 성과 이름을 받아서 OOO님 환영합니다. 출력하기
const hello = (fullname, callback) => {
  callback(`${fullname}님 환영합니다.`)
}

getFullName("김", "세환", (fullName) => {
  hello(fullName, print)
})

----------------------------------------------------------- */


// 1) 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력
const hap = result => {
  if (result % 2 === 0) {
    console.log(`${result}는 짝수입니다.`);
  } else {
    console.log(`${result}는 홀수입니다.`);
  };
}
const sum = (num1, num2, callback) => {
  callback(num1 + num2);
}
sum(10, 25, hap);d


// 2) 두 정수의 곱셉을 구한 뒤 결과에 2를 곱해서 출력
const print = result => {
  console.log(result);
};

const mul = (num1, num2, callback) => {
  callback((num1 * num2) * 2);
};

mul(10, 20, print);


// 3) 두 정수의 값 중 작은 값을 반환하여 출력




// 4) 문자열을 받아서 순서를 반대로 바꾼 후 출력
// 5) 사용자가 입력한 값까지 누헙한 한 후 5의 배수인지 확인 후 출력







