class MSPasswordPage {

    get passwordField(){
        return $('android.widget.EditText');
    }

    get signinBtn(){
        let selector='new UiSelector().text("Sign in")';
        return $(`android=${selector}`);
    }
}

module.exports=new MSPasswordPage();