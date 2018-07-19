import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('FriendStore')
@observer
class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const friend = this.friend.value;
    this.props.FriendStore.addFriend(friend);
    this.friend.value = '';
  }

  render() {
    const {FriendStore} = this.props;
    return (
      <div className="App">
        <h2>You have {FriendStore.friendCount} friends.</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="Enter friend" ref={input => this.friend = input}/>
          <button>Add Friend</button>
        </form>
        <ul>
          {FriendStore.friends.map(friend => (
             <li key={friend}>{friend}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
