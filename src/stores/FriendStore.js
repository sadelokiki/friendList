import { observable, action, computed } from "mobx";

class FriendStore {
 @observable friends = [];

 @action addFriend(friend) {
  this.friends.push(friend);
 }

 @computed get friendCount() {
  return this.friends.length;
 }

}

const store = new FriendStore();
export default store;