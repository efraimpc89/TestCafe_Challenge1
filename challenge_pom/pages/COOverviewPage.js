import { Selector, t } from 'testcafe'

class COYourInformationPage {
    constructor(){
        this.btnFinish = Selector('#finish')
        this.lblItemBackpack = Selector('.inventory_item_name').withText('Sauce Labs Backpack')
    }

}
export default new COYourInformationPage()