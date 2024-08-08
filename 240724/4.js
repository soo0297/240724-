// 문제 2번의 사자 객체를 가져옵니다.
const lion = {
    이름: "심바",
    나이: 3,
    주인공: "참",
    대사: "하쿠나마타타"
};

// 나이를 추가하는 함수입니다.
function incrementAge(lion) {
    return lion.나이+1;
}
// 함수 실행 이후 사자의 현재 나이를 출력합니다.
console.log(incrementAge(lion));




// // ++객체 lion에 새로운 속성을 추가하는 함수 만들기..
// function addLeg(lion) {
//     const newLion = {...lion, {다리: 4}}
//     return console.log(newLion);
// }

// addLeg(lion);
// console.log(addLeg(lion));