const userInput = (props) => {
    return (
        <div className="UserInput">
            <input id={'users' + props.id} type="text" value={props.value} onChange={props.changed}/>
        </div>
    );
}

export default userInput;