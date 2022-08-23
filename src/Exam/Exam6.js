import { useEffect, useState } from "react";

function Hello() {
    useEffect(() => {
        console.log('Hello!');
        // 함수 리턴을 할 건데 이걸 ~~ 이라고 부름. 
        return () => {
            console.log('Bye!!');
            // 즉 한마디로 element가 사라짐.
        }
    }, []);

    return(
        <div>
            <strong>Hello!!!</strong>
        </div>
    );
}

export default function Exam6() {
    const [ showing, setShowing ] = useState(false);
    // setShowing이 된다면 화면 렌더링까지 하겠다는 뜻.
    const onClickBtn = () => {
        // showing 값이 true일때, false, false일 때, true 되게 하기
        // 내풀이
        // setShowing( showing => showing === false ? 
        //     showing = true : showing = false )
        // 선생님풀이. => 즉 toggle과 같음.
        setShowing(preVal => !preVal);
    }

    return (
        <div>
            <button onClick={onClickBtn}>
                { showing ? 'hide' : 'show' }
            </button>
            { showing ? <Hello /> : null }
        </div>
    );
}