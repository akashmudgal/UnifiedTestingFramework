class MSPasswordPage {

    get passwordField(){
        return $('XCUIElementTypeSecureTextField');
    }

    get signinBtn(){
        return $(`-ios predicate string:label == 'Sign in'`)
    }
}

module.exports=new MSPasswordPage();