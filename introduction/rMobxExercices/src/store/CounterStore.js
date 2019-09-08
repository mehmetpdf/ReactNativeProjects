import {action, autorun, observable ,reaction, when} from "mobx";

class CounterStore {
    @observable count = 1 // observable demek count degiskenini uygulamanin her yerinden takip edebilecegiz..


    /**
     * autorun initial durumda ve change durumunda direk calisir.
     */
    constructor(){
        /*autorun(() => {
            alert(this.count)
        });*/

        /**
         * Sorun su: count 5 olunca basardi yazsin ekrana. Bu durumda azalt() ve arttir()
         * fonksiyonlarinin icine iki defa if yazmak zorunda kalacaktik.
         * ancak biz bu durumda reaction ile kurtulmus oluyoruz..
         */
        /*reaction(() => {this.count},
            (count) => {
            if(count === 5)
                alert("Başardın");
            });*/


        /**
         * Sorun su: count 5 olunca basardi yazsin ekrana. Bu durumda azalt() ve arttir()
         * fonksiyonlarinin icine iki defa if yazmak zorunda kalacaktik.
         * ancak when ile boolean bir deger olup olmadigini ilk parametrede belirliyoruz.
         * eger true olursa opts degiskeni bir kereye mahsus calisiyor.
         */
        when(() => this.count === 5,
            () => {alert("Başardın")})


    };


    @action azalt = () => {
        this.count--;
    };

    @action arttir = () => {
        this.count++;
    };
}

export default new CounterStore();