import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Exam1 from './Exam/Exam1';  // 추가함.
// import Exam2 from './Exam/Exam2';  // 추가함.
// import Exam3 from './Exam/Exam3';  // 추가함.
// import Exam4 from './Exam/Exam4';  // 추가함.
// import Exam5 from './Exam/Exam5';  // 추가함.
// import Exam6 from './Exam/Exam6';  // 추가함.
// import TodoApp from './TodoApp';  // 추가함.
// import App from './App';
import CoinTracker from './CoinTracker';  // 추가함.
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CoinTracker />
    {/* 여기에는 원래 하나만 사용함. app이나 exam1 둘 중 하나만 사용하는 것. */}
  </React.StrictMode>
  // {/* React.StrictMode 는 개발할때 에러가 나면 나타내기 위해서 사용하는데, 콘솔이 2번찍힘. */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
