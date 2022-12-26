const LoginPage=require('../pageobjects/login.page');

describe('MS Teams Login Application',() => {
    it('should login to MS Teams app',async ()=>{
        await LoginPage.login();
    });
});