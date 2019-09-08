import {action, observable} from "mobx";

class CounterStore {
    @observable count = 1 // observable demek count degiskenini uygulamanin her yerinden takip edebilecegiz..

    @action azalt = () => {
        this.count--;
    };

    @action arttir = () => {
        this.count++;
    };
}

export default new CounterStore();