import { useEffect, useState } from "react";

export default function Exam5() {
    const [ counter, setCounter ] = useState(0);
    const [ keyword, setKeyword ] = useState('');

    // console.log(`search for ${keyword}`);
    
    // 내풀이
    // function countUp() {
    //     setCounter ( preVal => preVal + 1);
    // }
    // function countDown() {
    //     if( counter > 0){
    //         setCounter(preVal => preVal -1 );
    //     }
    // }

    // 선생님 풀이
    const onClickPlus = () => setCounter(preVal => preVal +1 );
    const onClickMinus = () => setCounter(preVal => preVal === 0 ? 0 : preVal - 1 );
   
    // 바인딩(연결도)시켜줘야되지만, 키워드 수정도 가능해야한다.
    // v-model이 없음. 리액트는!  
    const onChangeText = (e) => {
        setKeyword(e.target.value);
    }

    // 최초 딱 한번 화면 그려질때 실행. => [] 아무런 조건이 없을때는! 딱한번만!
    useEffect(() =>{   
        if(keyword.length > 5) {    // 6자 부터 실행됨.
            console.log('AAA');
        } 
    }, [keyword]); // keyword가 바뀔때 마다 실행되어라! 하는것.


    return (
        <div>
            <input 
                type="text" 
                placeholder='search here...'
                value={ keyword }
                onChange={ onChangeText }
            />
            <h1>{ counter }</h1>
            {/* 내풀이
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
             */}
            {/* 선생님 풀이. */}
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
           
        </div>
    )
}
