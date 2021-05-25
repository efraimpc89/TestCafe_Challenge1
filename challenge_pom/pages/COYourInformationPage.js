import { Selector, t } from 'testcafe'

class COYourInformationPage {
    constructor(){
        this.txtFirstName = Selector('#first-name')
        this.txtLastName = Selector('#last-name')
        this.txtZip = Selector('#postal-code')
        this.btnContinue = Selector('#continue')
        this.btnCancel = Selector('#cancel')
        this.errorMsgMissingFirstName = Selector('h3[data-test="error"]').withText('First Name is required')
    }

    async clickContinueBtn(){
        await t.click(this.btnContinue)
    }

    async submitYourInformationForm(your_information){
        if(your_information.FIRST_NAME != '')
            await t.typeText(this.txtFirstName, your_information.FIRST_NAME, {paste:true})
        if(your_information.LAST_NAME != '')
            await t.typeText(this.txtLastName, your_information.LAST_NAME, {paste:true})
        if(your_information.ZIP != '')
            await t.typeText(this.txtZip, your_information.ZIP, {paste:true})

        this.clickContinueBtn()
    }

}
export default new COYourInformationPage()