// 1. 배열 메서드인 `map` 을 사용하여 완성해주세요.
// 2. 멘토링 상태를 확인할 수 있는 불리언 타입의`isMentoring` 속성을 추가 후, 이 추가된 새로운 객체 배열을 만듭니다.(값은 `true`로 설정해주세요.)
// 3. 반환값이 있는 `map` 을 통해 `newTutors` 변수에 담아서 출력해주세요.

let tutors = [
    {
      name: '최원장',
      time: '9to6',
    },
    {
      name: '윤창식',
      time: '9to6',
    },
    {
      name: '박가현',
      time: '9to6',
    },
    {
      name: '김병연',
      time: '9to6',
    },
  ];
  
  // 여기에 코드를 작성하세요.
  const newTutors = tutors.map(function (mentor) {
    const newMentors = {
        name: mentor.name,
        time: mentor.time,
        isMentoring: true,
    };
    return newMentors;
  })
  
  console.log(newTutors);