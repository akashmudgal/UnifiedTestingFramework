const passwordPage = require('./msonline.password.page');

class TeamsAndroidLoginPage {

    get inputEmailBox(){
        return $('id=edit_email');
    }

    get signInBtn(){
        return $('id=sign_in_button');
    }

    get nextBtn(){
        return $('id=action_next_button')
    }

    get gotItBtn(){
        return $('id=action_last_button')
    }

    get privacyNoticeAcceptBtn(){
        return $('~Got it button')
    }
    async login(){
        await this.inputEmailBox.setValue("adelev@M365x24255098.onmicrosoft.com");
        await this.signInBtn.click();
        await passwordPage.passwordField.setValue("80r8Ea1BLA");
        await passwordPage.signinBtn.click();
        await this.nextBtn.click();
        await this.nextBtn.click();
        await this.gotItBtn.click();
        try{
            await this.privacyNoticeAcceptBtn.click();
        }
        catch{
            //ignore
        }
        
    }
}

module.exports=new TeamsAndroidLoginPage();