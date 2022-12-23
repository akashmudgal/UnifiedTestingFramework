const passwordPage = require('./msonline.password.page');

class TeamsLoginPage {

    get inputEmailBox(){
        return $('id=com.microsoft.teams:id/edit_email');
    }

    get signInBtn(){
        return $('id=com.microsoft.teams:id/sign_in_button');
    }

    get nextBtn(){
        return $('android.widget.Button')
    }

    async login(){
        await this.inputEmailBox.setValue("adelev@M365x24255098.onmicrosoft.com");
        await this.signInBtn.click();
        await passwordPage.passwordField.setValue("80r8Ea1BLA");
        await passwordPage.signinBtn.click();
        const nextBtn=await this.nextBtn;
        let i=0;
        while(i<3)
        {
            await nextBtn.click();
        }
        try{
            await this.nextBtn.click();
        }
        catch{
            //ignore
        }
    }
}

module.exports=new TeamsLoginPage();