import PropTypes from 'prop-types'; // PropTypes은 앞에 P가 대문자!

export default function Button( { color, text, onClick} ) {
    // 구조분할은 여기서도 할 수 있다.
    // Button(props)를 변경 
    // { color, text } 이렇게 객체를 구조분할 한 것.
    // console.log(props);
    return (    // 소괄호 안써도 되지만 쓰는 것을 추천함.
        // <button className={props.color}>{props.text}</button>
        <button onClick={onClick} className={color}>{text}</button>
        //  props에 들어온 값을 사용하겠다는 뜻.
        // 즉, Exam3에 설정한 값을 받아서 적용시키기 때문에 화면에는 각 설정된 값으로 변경되어 있다.
    );
}

// 내가 실수했는지 안했는지를 알기 위해서 넣어둠.
Button.propTypes = {
    text: PropTypes.string.isRequired   // string 허용된 것.
}

Button.defaultProps = {
    text: 'btn'
}