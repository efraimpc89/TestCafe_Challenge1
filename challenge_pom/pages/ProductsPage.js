import { Selector, t } from 'testcafe'

class ProductsPage {

    constructor(){
        this.btnBurgerMenu = Selector('#react-burger-menu-btn')
        this.linkAllItems = Selector('#inventory_sidebar_link')
        this.linkAbout = Selector('#about_sidebar_link')
        this.linkLogout = Selector('#logout_sidebar_link')
        this.linkResetAppState = Selector('#reset_sidebar_link')
        this.btnShoppingCart = Selector('.shopping_cart_link')
        this.btnAddBackpackItem = Selector('#add-to-cart-sauce-labs-backpack')
        this.btnAddBikeLightItem = Selector('#add-to-cart-sauce-labs-bike-light')
    }

    async clickBurgerMenuBtn(){
        await t.click(this.btnBurgerMenu)
    }

    async clickShoppingCartBtn(){
        await t.click(this.btnShoppingCart)
    }

    async selectMenuOption(option){
        this.clickBurgerMenuBtn()
        switch(option.toLowerCase()){
            case 'all items':
                    await t.click(this.linkAllItems)
                break
            case 'about':
                    await t.click(this.linkAbout)
                break
            case 'logout':
                    await t.click(this.linkLogout)
                break
            case 'reset app state':
                    await t.click(this.linkResetAppState)    
                break
        }
    }

    async addItemToCart(option){
        switch(option.toLowerCase()){
            case 'backpack':
                    await t.click(this.btnAddBackpackItem)    
                break
            case 'bike light':
                    await t.click(this.btnAddBikeLightItem)    
                break
        }
    }


}
export default new ProductsPage()