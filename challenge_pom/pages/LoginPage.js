import { Selector, t } from 'testcafe'

class LoginPage {

    constructor(){
        this.txtUsername = Selector('#user-name')
        this.txtPassword = Selector('#password')
        this.btnLogin = Selector('#login-button')
        this.errorMsgMissingUsername = Selector('h3[data-test="error"]').withText('Username is required')
        this.errorMsgInvalidUser = Selector('h3[data-test="error"]').withText('Username and password do not match any user in this service')
    }

    async clickLoginBtn(){
        await t.click(this.btnLogin)
    }

    async submitLoginForm(credentials){
        await t.typeText(this.txtUsername, credentials.USERNAME, {paste:true})
        await t.typeText(this.txtPassword, credentials.PASSWORD, {paste:true})
        this.clickLoginBtn()
    }

}
export default new LoginPage()