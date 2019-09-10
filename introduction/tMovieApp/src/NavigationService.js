// NavigationService.js

/**
 * Şimdi kullanici dogru şekilde kullanıcı adı ve şifresini girdi.
 * Bu store üzerinden de anasayfaya yönlendirmemiz lazım kullanıcıyı.
 * Normalde yönlendirme işlemini this.props.navigation ile yapiyorduk.
 * Ancak store üzerinde props u kullanamiyoruz. Bunu kullanmak icin
 * react bizim icin hazir bir servis yapmış.
 *
 * Hazir servis : https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html sitesinde
 *
 */

import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
};