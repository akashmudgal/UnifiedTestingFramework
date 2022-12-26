const passwordPage = require('./msonline.password.page');

class TeamsIOSLoginPage {
    get cancelBtn(){
        return $('~Cancel')
    }

    get inputEmailBox(){
        return $('~accountField');
    }

    get signInBtn(){
        return $(`[name='Sign in']`);
    }

    get disallowMicBtn(){
        return $('~Don’t Allow')
    }

    get okBtn(){
        return $('~OK')
    }

    get nextBtn(){
        return $('-ios class chain:**/XCUIElementTypeButton[`label == "Next Page"`]')
    }

    get gotItBtn(){
        return $('~yesButton')
    }

    get privacyNoticeAcceptBtn(){
        return $('~privacyNoticeAcceptButton')
    }

    async login(){
        await this.inputEmailBox.setValue("adelev@M365x24255098.onmicrosoft.com");
        await this.signInBtn.click();
        await passwordPage.passwordField.setValue("80r8Ea1BLA");
        await passwordPage.signinBtn.click();
        await this.disallowMicBtn.click();
        await this.okBtn.click();
        await this.nextBtn.click();
        await this.nextBtn.click();
        await this.gotItBtn.click();
        await this.privacyNoticeAcceptBtn.click();
    }
}

module.exports = new TeamsIOSLoginPage();