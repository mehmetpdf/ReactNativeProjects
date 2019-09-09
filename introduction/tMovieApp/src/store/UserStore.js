import {observable} from "mobx";

class UserStore {
    @observable username= "myilmaz"
}

export default new UserStore();