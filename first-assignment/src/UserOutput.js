import './User.css';
import UserInput from './UserInput';

const userOutput = (props) => {
    const style = {
        'cursor': 'pointer',
    };
    return (
        <div className="UserOutput">
            <p onClick={props.click} style={style}>I'm {props.username}</p>
            <p>{props.children}</p>
            <UserInput value={props.username} changed={props.changed} id={props.id}></UserInput>
        </div>
    );
}

export default userOutput;