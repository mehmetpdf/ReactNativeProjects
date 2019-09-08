import {action, autorun, observable} from "mobx";

class CounterStore {
    @observable count = 1 // observable demek count degiskenini uygulamanin her yerinden takip edebilecegiz..


    /**
     * autorun initial durumda ve change durumunda direk calisir.
     */
    constructor(){
        autorun(() => {
            alert(this.count)
        })
    };


    @action azalt = () => {
        this.count--;
    };

    @action arttir = () => {
        this.count++;
    };
}

export default new CounterStore();