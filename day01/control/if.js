// if() {
//   true일 때 실행할 문장;
// }

// if() {
//   true일 때 실행할 문장;
// } else {
//   아닐때 실행할 문장
// }

// if(){

// }else if() {

// }




// 이름 : 이진아
// 국어 : 80점
// 수학 : 70점
// 영여 : 90점
// 과학 : 20점

// 평균, 학점 구하기
// if문으로 평균이 60점 이상인 학생은 합격, 60점 미만이면 학생은 불합격 출력하기

// 최종문장
// 000님의 이번 총점은 00, 평균은 00점으로 (합격 또는 불합격)입니다.



  let name = "이진아";
  let korean = 80;
  let math = 70;
  let english = 90;
  let science = 20;
  let total = korean + math + english + science;
  let average = total / 4;

  if(average >= 60) {
    console.log(`${name}님의 이번 총점은 ${total}점, 평균은 ${average}점으로 합격입니다`);
  } else {
    console.log(`${name}님의 이번 총점은 ${total}점, 평균은 ${average}점으로 불합격입니다`);
  }










