import React, { useState } from 'react';
import './App.css';
import UserOutput from './UserOutput';

function App() {
  const style = {
    cursor: 'pointer',
    padding: '8px',
    width: '80px',
  };

  const [usersState, setUsersState] = useState({
    users: [
      {id: 0, username: "Petyo", info: ' and I\'m a Web Developer'},
      {id: 1, username: "Tanya", info: ' and I\'m a mother and Petyo\'s wife'},
      {id: 2, username: "Joan", info: ' and I\'m their baby'},
    ],
    showUsers: false
  });

  const changeUsernameHandler = (event, key) => {
    const userIndex = usersState.users.findIndex(u => {
      return u.id === key;
    });
    const user = {...usersState.users[userIndex]};
    user.username = event.target.value;

    const users = [...usersState.users];
    users[userIndex] = user;

    setUsersState({
      users: users,
      showUsers: usersState.showUsers,
    });
  };

  const toggleUsersHandler = () => {
    setUsersState({
      users: usersState.users,
      showUsers: !usersState.showUsers,
    });
  };

  const deleteUsersHandler = (idx) => {
    const users = [...usersState.users];
    users.splice(idx, 1);
    setUsersState({
      users: users,
      showUsers: usersState.showUsers,
    });
  };

  return (
    <div className="App">
      <h1>Hi I'm a React App!</h1>
      <p>This is a div.</p>
      <button
        style={style}
        onClick={toggleUsersHandler}
      >Click</button>
      {usersState.showUsers ? 
        <div>
          {usersState.users.map((user, idx) => {
            return <UserOutput 
                    click={() => deleteUsersHandler(idx)}
                    username={user.username}
                    changed={(e) => changeUsernameHandler(e, user.id)}
                    id={user.id}
                    key={user.id}
                  >{user.info}</UserOutput>
          })}
        </div> : null}
    </div>
  );
}

export default App;
