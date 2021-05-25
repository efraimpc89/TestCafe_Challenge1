import { Selector, t } from 'testcafe'

class CartPage {
    constructor(){
        this.lblYourCart = Selector('span[class="title"]').withText('Your Cart')
        this.btnCheckout = Selector('#checkout')
        this.btnContinueShopping = Selector('#continue-shopping')
        this.lblItemBackpack = Selector('.inventory_item_name').withText('Backpack')
        this.lblItemBikeLight = Selector('.inventory_item_name').withText('Bike Light')
    }
}
export default new CartPage()