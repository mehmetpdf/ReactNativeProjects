import {observable} from "mobx";

class CounterStore {
    @observable count = 1 // observable demek count degiskenini uygulamanin her yerinden takip edebilecegiz..

    azalt = () => {
        this.count--;
    }

    arttir = () => {
        this.count++;
    }
}

export default new CounterStore();