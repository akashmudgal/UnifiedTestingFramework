class MSPasswordPage {

    get passwordField(){
        return $('android.widget.EditText');
    }

    get signinBtn(){
        let selector='new UiSelector().text("Sign in").className("android.widget.Button")';
        return $(`android=${selector}`);
    }
}

module.exports=new MSPasswordPage();