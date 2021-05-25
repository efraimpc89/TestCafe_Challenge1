import { Selector, t } from 'testcafe'

class CheckoutYourInformationPage {
    constructor(){
        this.lblYourInformation = Selector('span[class="title"]').withText('Your Information')
        this.txtFirstName = Selector('#first-name')
        this.txtLastName = Selector('#last-name')
        this.txtZip = Selector('#postal-code')
        this.btnContinue = Selector('#continue')
        this.btnCancel = Selector('#cancel')
    }
}
export default new CheckoutYourInformationPage()