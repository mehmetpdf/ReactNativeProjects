import {observable, action} from "mobx";
import AsyncStorage from "@react-native-community/async-storage";
import NavigationService from '../NavigationService';

class AuthStore {
    @observable token= null;

    @action async _saveToken(token){
        try {
            await AsyncStorage.setItem('token', token);
            await this._setupAuth();

        } catch (e) {
            console.log(e)
        }
    }

    @action async _setupAuth(){
        await this._getToken();
    }

    @action async _getToken(){
        try {
            const token = await AsyncStorage.getItem('token');

            if(!token){
                NavigationService.navigate('Auth');
                return false;
            } else {
                this.token = token;
                NavigationService.navigate('App')
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export default new AuthStore();