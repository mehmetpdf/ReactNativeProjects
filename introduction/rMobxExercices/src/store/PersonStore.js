import {observable, action, configure} from "mobx";

configure({ // Action kullanmayi unutursak eger uygulamanin hata verip hatirlatmasi icin kullaniyoruz...
    enforceActions: "observed"
});

class PersonStore {
    @observable name = "none";
    @observable surname = "none";

    /**
     * ilk sayfa yüklendiginde loglara bakarsak eger;
     *      none - none
     * geliyor..
     *
     * butona bastigimizda ise;
     *      Mehmet - none
     *      Mehmet - Yilmaz
     * geliyor..
     *
     * Bu iki islemi tek seferde yapmak istersek eger metodumuzun basina @action koyuyoruz
     *
     * Büyük uygulamalarda iki defa notification gelmemesi icin ve sistemi yormamak icin kullaniliyor..
     */
    @action changeName = () => {
        this.name = "Mehmet";
        this.surname = "Yilmaz";
    }

}

export default new PersonStore();