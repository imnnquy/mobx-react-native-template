import {observable} from 'mobx'
import api from './api'

class UserStore {
  @observable counter = 0;
  @observable remoteCounter = 0;

  constructor() {
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  incrementAsync() {
    setTimeout(() => {
      this.counter++;
      }, 500);
  }

  getFromRemote() {
    api.get('/hello')
      .then( (r)=> {
        if(r.ok)
          this.remoteCounter = r.data;
        else
          this.remoteCounter = 'error';
      });
  }
}

const userStore = new UserStore;

export default userStore;
