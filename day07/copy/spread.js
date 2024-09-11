// spread (ES6) > 객체를 수정하기 위한 문법

// const animals = {
//  cat : "야옹이",
//  dog : "누렁이",
//  cow : "얼룩이",
//  tiger : "어흥이"
// }

// const animals2 = Object.assign({}, animals);
// animals2.camel = "낙둥이";

// // 깊은 복사
// const animals2 = {...animals, camel : "낙둥이"}
// animals2.cat = "네롱이";

// console.log(animals)
// console.log(animals2)

const arr1 = [1,2,3]
const arr2 = [2,3,4]
const arr3 = [5,6,7]

// const arr4 = arr1 + arr2 + arr3
// console.log(arr4.replaceAll(",",""))
// const arr4 = [...arr1, ...arr2, ...arr3]
// console.log(arr4)

const arr5 = [[10, 20, 40], [10], [[50, 60], 10], 20, [[[30], 20], 10]];
// [10, 20, 40, 10, 50, 60, 10, 20, 30, 20, 10] 출력하기

//ES10 .flat(dep)
console.log(arr5.flat(4))
console.log(arr5.join().split(","))
