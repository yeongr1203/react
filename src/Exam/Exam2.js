import { useState } from 'react';
// react 에서 넘겨주는 것 중에 useState만 바꾸겠다는것. {} 이렇게 하면 부분만 바꾸는 것.

function Exam2() {
    /*
    const data = useState(0);
    // 배열이 넘어옴.
    // 1번방에는 date의 값을 바꿀 수 있는 useState가 있음.
    // let counter = 0;
    const counter = data[0];
    const setCounter = data[1];
    */

    // 아래형식은 함수형일때, 클래스 형식을때는 다름.
    const [ counter, setCounter ] = useState(0);
    // const [ counter2, setCounter2 ] = useState(10);

    // 위의 3줄과 동일한 뜻.
    // 이건 여러개 만들 수 있음.
    // 0번 방에 있는 값에 counter값을 바꿀 수 있는 함수(setCounter)
    
    function countUp() {
        /*
        counter = counter + 1;
        console.log(counter);
        console.log(data);
        */
       // setCounter(counter + 1);  // 이건 값을 직접 줌.
       // 아래처럼 콜백함수를 쓰는게 더 안정적.
       // setCounter에서 preVal에 내가 갖고 있는 그 값을 밀어 넣어준다. 그래서 저렇게 직접 주는 것보다 콜백함수를 사용하는 것이 더 안정적이다.
       setCounter( preVal => preVal +1 );
    }

    return  (
        <div>
            <h1>클릭 카운터 수 : { counter }</h1>    
            {/* { { counter } }  이것과 같은 뜻.*/}
            <button onClick={ countUp }>Click Me</button>
        </div>
    );
}

export default Exam2;
// 이거 안하면 에러터짐. 외부허용하지 않은 것이기 때문.