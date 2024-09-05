// 1) 1~100까지 짝수만 더한 후 결과 값에 3을 곱한 후 출력
const even = (callback) => {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  callback(sum);
};

const multi3 = (number, callback) => {
  callback(number * 3);
};

const print = (result) => {
  console.log(result);
};

even((sum) => {
  multi3(sum, print);
});



// 2) 2개의 정수 중 최소 값과 최대 값을 비교한 후 큰 값에 10을 곱해서 출력
const compare = (num1, num2, callback) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
  if (num1 == num3) return "두 수는 같습니다. ";
  }

  let max = Math.max(num1, num2);
  return callback(max);
  };

const multiplyByTen = (num) => num * 10;
console.log(compare(3, 6, multiplyByTen));




// 3) 결제 상품의 이름과 결제 상태를 전달 받아서 
// 결제 상태가 true일 경우 결제 완료, false 인 경우 결제 취소를 출력

const info = (name, checkpay, callback) => {
  const message = checkpay ? '결제 완료' : '결제 취소';
  callback(`${name}: ${message}`);
}

const printMessage = (message) => {
  console.log(message);
}

info('선풍기', true, printMessage); 



// 4) 상품 가격과 총 구매한 가격의 합을 입력 받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니라면 false 출력
// ex) 가격 1000원, 총 구매가격 5000원 == 구매 개수 5개

const getCount = (price, total, callback) => {
  let count = total / price;
  callback(count)
}

const checkCount = (count, callback) => {
  let result = count <= 5;
  callback(result);
}

getCount(1000, 6000, (count) => {
  checkCount(count, printMessage)
})

