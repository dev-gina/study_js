// 1) 1~10까지 Array 객체에 담은 후 짝수만 출력
const Array = [1,2,3,4,5,6,7,8,9,10]
Array.filter(data => data % 2 === 0).forEach(data => console.log(data));


// 2) 한글을 숫자로
// ex) "일이삼사" => "1234"
const hangles = "공일이삼사오육칠팔구";
const input = "공일이삼".split("");
console.log(input.map(c => hangles.indexOf(c)).join(""))



// 3) 숫자를 한글로
// ex) "1234" => "일이삼사"
const content = "1234".split("");
console.log(content.map((data) => hangles[data]).join(""))



// 4) 1~100까지 합 출력
const getSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
const totalSum = getSum(100);
console.log(totalSum);



// 5) 문자열 반대로 출력하기 .reverse() 사용
const arr5 = ["Hello, JAVA"];
const reversed = arr5[0].split('').reverse().join('');
console.log(reversed);



// 6) 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1234-5678
// result) 010-****-5678
const phoneNumber = "010-1234-5678";
console.log(phoneNumber.split("1234").join("****"));


