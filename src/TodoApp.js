import { useEffect, useState } from "react";

export default function TodoApp() {
    const [ todo, setTodo ] = useState('');
    const [ todoList, setTodoList ] = useState([]);

    const onChange = (e) => {
        setTodo(e.target.value);
    }
    // Q. Add To do 버튼을 누르면 form에 원래 있는 이벤트를 막아주고, todo값을 console에 찍기
   const onSubmit = (e) => {
        e.preventDefault();
        if(todo === '') { return; }
        setTodoList(preVal => [todo, ...preVal]);
        console.log(todo);
        setTodo('');
   }
   // Q.input에 아무값도 없으면 아무일도 안한다. 대신, input에 값이 있으면 To do List 앞에 추가하는데, setTodoList, 콜백함수 이용하여 해결. todoList에 새로운배열 할당.
   /*
        if(todo === '') { return; }
        setTodoList(preVal => [todo, ...preVal]);
        이거 2줄 추가됨.
        ul 태그 안에 { todoList } 로 확인 가능.
   */


    return (
        <div>
            <h1>My Todo List</h1>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder="Write your to do..."
                    value={ todo }
                    onChange={ onChange }
                />
                <button>Add To do</button>
            </form>
            <ul>
                {/* { todoList } */}
                { todoList.map((item, idx) => (<li key={idx}>{item}</li>))}
                {/* 반복문일때는 반드시 key값 사용. =>  key={idx} vue도 동일 */}
                {/* map은 리턴값이 있고, todoList와 똑같은 크기의 배열이 나옴. 그리고, 중괄호 생략하고 () 만 사용했기 때문에 리턴이다. */}
            </ul>
        </div>
    );
}