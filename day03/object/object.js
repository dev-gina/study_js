const obj = {
  name : "이진아",
  age : 20
}

// obj.key 접근법
// obj.name = "홍길동";
// console.log(obj.name);

// obj[key] 접근법
// key 값에 규칙성을 주고 싶을 때 사용하는 방법
// console.log(obj["name"]);


const products = {
  product1 : "지우개",
  product2 : "키보드",
  product3 : "마우스",
  product4 : "승용씨노트북",
  product5 : "진아노트북",
  product6 : "태혁이10년노트북",
}



for(let i = 0; i < products.length; i++) {
  console.log(products[`product${i}`])
}

//빠른 for~in문 제공
for(let key in products) {
  console.log(products[key])
}


//빠른 for~of문 제공
//순서가 있는 객체에서 사용할 수 있는 for문
// for(let key of products) {
//   console.log(key)
// }


const users = {
  user1 : {
    name : "홍길동",
    age : 40,
    point : 20000,
  },
  user2 : {
    name : "이순신",
    age : 20,
    point : 1500,
  },
  user3 : {
    name : "장보고",
    age : 60,
    point : 9500,
  },
  user4 : {
    name : "김철수",
    age : 25,
    point : 4000,
  },
}

// for문을 이용하여 모든 유저의 point를 누적합한 후 콘솔에 출력하기

let totalPoints = 0;

for (let key in users) {
  totalPoints += users[key].point;
}
console.log(totalPoints);


//태혁
const getUserPoint = (users, callback) => {
  let result = 0;
  for(let user in users){
    result += users[user].point;
  }
  callback(result)
}
const printPoint = (point) => {
  console.log(point)
}

getUserPoint(users, printPoint)



















