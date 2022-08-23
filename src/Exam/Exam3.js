import { useState, memo } from 'react';
import Button from './Button';
import './Exam3.css';


export default function Exam3() {
    const [ val, setVal ] = useState('버튼1');
    const btn10nClick = () => setVal('Button1');
    const MemorizedBtn = memo(Button);
    return (
        <div>
            {/* Button의 return한 값이 <Button/> 여기에 들어간다. */}
            <MemorizedBtn text={val} color="red" onClick={btn10nClick}/>
            {/* 보낸건 객체,  */}
            {/* Button안에 값이 들어가진다. */}
            <MemorizedBtn text="버튼2" color="blue"/>
            <MemorizedBtn text="버튼3" color="pink"/>
        </div>
    );
}