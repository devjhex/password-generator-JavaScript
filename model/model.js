/* The model code for the password generator. */

export default class Model {
    constructor() {
        this.passwordHistory = [];

        const types = {
            uppercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            lowercase:"abcdefghijklmnopqrstuvwxyz",
            number:"0123456789",
            symbols:"!@#$%^&*()_-[]{}|`:;+~<>=?/.,"
        };

        this.getType = [
            function uppercase(){
                return types.uppercase[Math.floor(Math.random()*types.uppercase.length)];
            },
            function lowercase(){
                return types.lowercase[Math.floor(Math.random()*types.lowercase.length)];
            },
            function number(){
                return types.number[Math.floor(Math.random()*types.number.length)];
            },
            function symbols(){
                return types.symbols[Math.floor(Math.random()*types.symbols.length)];
            }         
        ];
       

    }

    bindDisplayPasswordHistory(callback){
        this.displayPasswordHistory = callback;
    }

    generatePassword = (length, settings) => {
        let newPassword = '';
        let uid = 'uid' + (new Date()).getTime();

        if(settings.uppercase + settings.lowercase + settings.symbols + settings.number === 0){
            alert('There is no box that has been checked. Please select at least one box to generate your password for Security');

            return 'Click icon to Generate >';
        }
    
        if(!localStorage.getItem("all-passwords")) {
            localStorage.setItem("all-passwords", JSON.stringify(this.passwordHistory));
        }
    
        while (newPassword.length < length) {
             let characterFunc = this.getType[Math.floor(Math.random()*this.getType.length)];

            let functionName = characterFunc.name;
            let isChecked = settings[functionName];

            if (isChecked) {
                newPassword += characterFunc();
            }

        }
    
        this.passwordHistory = this.getAllPasswords();

        this.passwordHistory.push({[uid]:newPassword});
    
        this.saveNewPassword(this.passwordHistory);

        this.displayPasswordHistory(this.passwordHistory);

        this.passwordHistory.length = 0;

        return newPassword;
    
    }
    
    getAllPasswords (){
        return JSON.parse(localStorage.getItem("all-passwords"));
    }
    
    saveNewPassword(data){
        localStorage.setItem("all-passwords", JSON.stringify(data));
    }
    
    deleteAllPasswords(){
        localStorage.clear();
    }
}


