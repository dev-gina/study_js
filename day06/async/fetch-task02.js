// https://jsonplaceholder.typicode.com/todos

// ES8 asynd await 데이터 통신
// getTitles
// todos에서 title만 5개 가져오기 0 ~ 4번
// 값으로 가져온 데이터를 "제목 : title" 내용으로 변경 출력하기

// const getTitles = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   if(!response.ok) return;

//   const datas = await response.json();
//   return datas;
// }

// const titles = getTitles().then((datas) => datas.map(({title}) => title));
// titles
//    .then((titles) => titles.slice(0,5))
//    .then((titles) => titles.map((title) => `제목 : ${title}`))
//    .then(console.log)
//    .catch(console.error)


// https://jsonplaceholder.typicode.com/comments
// email만 10개만 가져온 후 email에서 아이디만 가져오기
// [Eliseo@gardner.biz] -> ["Eliseo", ...]
// 아이디만 출력하기

                 //싱크 보이면 Promise로 감싸져 있으니 무조건 await 때려박기
// const getEmail = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/comments");
//   if(!response.ok) return;
//   const datas = await response.json();
//   return datas;
// }

// getEmail()
//   .then((datas) => datas.map(({ email }) => email))
//   .then((emails) => emails.slice(0, 10))  
//   .then((emails) => emails.map((email) => email.split("@")[0]))
//   .then((ids) => ids.map((id) => `유저 아이디 : ${id}`))
//   .then(console.log)
//   .catch(console.error)


// https://jsonplaceholder.typicode.com/users
// 이름만 가져와서 이름을 거꾸로 뒤집어서 출력하기
// Leanne Graham -> maharG ennaeL

const getName = async () => {
 const response = await fetch("https://jsonplaceholder.typicode.com/users");
 if(!response.ok) return;
 const datas = await response.json();
 return datas;
}

getName()
  .then((users) => users.map(({ name }) => name ))
  .then((names) => names.map((name) => name.split("").reverse().join("")))
  .then(console.log)
  .catch(console.error)


// 강사님 코드
// const getUserNames = async () => {
//  const response = await fetch("https://jsonplaceholder.typicode.com/users");
//  const datas = await response.json();
//  return datas;
// }

// getUserNames()
//  .then((users) => users.map(({name}) => name))
//  .then((names) => {
//    return names.map((name) => {
//      let reverseName = "";
//      for(let i = 0; i < name.length; i++){
//        reverseName += name.charAt(name.length - i - 1);
//      }
//      return reverseName;
//    })
//  })
//  .then(console.log)
//  .catch(console.error)







 


 






