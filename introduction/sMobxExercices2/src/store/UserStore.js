import {observable, configure, action} from "mobx";
import  axios from 'axios';

configure({ // Action kullanmayi unutursak eger uygulamanin hata verip hatirlatmasi icin kullaniyoruz...
    enforceActions: "observed"
});

class UserStore {
    @observable users = [];

    @action _fetchUser() {
        axios
            .get('https://randomuser.me/api/?results=10')
            .then(response => response.data.results)
            .then(this._fetchUserSuccess, this._fetchUserError);
    };

    /**
     * action.bounds kullanma sebebi:
     * eger axios icinde "this" i consola yazdırırsak this in altinda _fetchUserSuccess ve _fetchUserError
     * metodlari yok.
     * Bu metodlari gormesi icin de action.bound kullanildi.
     */
    @action.bound _fetchUserSuccess(users) {
        this.users = users;
    };

    @action.bound _fetchUserError() {
        console.log("error");
        alert("error")
    };
}

export default new UserStore();