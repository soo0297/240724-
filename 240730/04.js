// 1. 배열 메서드인 `filter` 를 사용하여 완성해주세요.
// 2. `icedOnly` 속성이 `true` 인 커피 배열을 만듭니다.
// 3. 반환값이 있는 `filter` 를 통해 `icedOnly` 변수에 담아서 출력해주세요.

let starbucks = [
    {
      name: '카페 라떼',
      icedOnly: false,
    },
    {
      name: '콜드 브루',
      icedOnly: true,
    },
    {
      name: '돌체 라떼',
      icedOnly: false,
    },
    {
      name: '돌체 콜드 브루',
      icedOnly: true,
    },
  ];
  
  // 여기에 코드를 작성하세요.
  // 아이스 전용 커피 배열을 만듭니다.
  const icedOnly = starbucks.filter(function (coffee) {
    if (coffee.icedOnly === true) {
        return true;
    } else {
        return false;
    };
  })
  
  console.log(icedOnly);