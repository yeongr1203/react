import { useState } from 'react';
import Button from './Button';
import './Exam3.css';

export default function Exam3() {
    const [ val, setVal ] = useState(10);   //에러터짐,타입안맞음.
    return (
        <div>
            <Button color="red" />
            <Button text={val} color="red" />
        </div>
    )
}