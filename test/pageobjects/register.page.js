//const { Email } = require("../../data/datafile");
//const { Password } = require("../../data/datafile");
import NewPage from "./new.page";

class RegisterPage extends NewPage {

    get email(){
        return $('#input_0');
    }

    get password(){
        return $('#input_1');
    }

    get btnContinue(){
        return $('#AP_FirstPage_CreateAccount');
    }

    async createAccount(email, password){
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.btnContinue.click();
    }

    open() {
        return super.open('apply/career.html')
    }
}
export default new RegisterPage();

