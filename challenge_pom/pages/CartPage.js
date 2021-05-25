import { Selector, t } from 'testcafe'

class CartPage {
    constructor(){
        this.btnCheckout = Selector('#checkout')
        this.btnContinueShopping = Selector('#continue-shopping')
        this.lblItemBackpack = Selector('.inventory_item_name').withText('Sauce Labs Backpack')
        this.lblItemBikeLight = Selector('.inventory_item_name').withText('Sauce Labs Bike Light')
    }

    async clickCheckutBtn(){
        await t.click(this.btnCheckout)
    }
}
export default new CartPage()