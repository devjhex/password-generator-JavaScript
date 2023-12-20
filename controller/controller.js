import View from "../view/view.js";
import Model from "../model/model.js";

class Controller {

    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.createApp();
        
        this.view.updatePasswordLength();
        
        this.view.bindGeneratePasswordFunction(this.handleGeneratePassword);

        this.view.handleCopyPassword();
        
        this.view.bindClearHistoryFunction(this.handleClearHistory());
        
        this.model.bindDisplayPasswordHistory(this.handlePasswordHistory());

        this.view.observeMutation();

        this.view.displayPasswordHistory(this.model.getAllPasswords());
        
    }

    handleGeneratePassword = (passwordLength, settings) => {
       return this.model.generatePassword(passwordLength, settings);
    }

    handlePasswordHistory = () => {
       return this.view.displayPasswordHistory;
    }

    handleClearHistory = () => {
       return this.model.deleteAllPasswords;
    }

}

const app = new Controller(new Model(), new View());