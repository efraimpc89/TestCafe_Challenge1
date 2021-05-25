import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import COYourInformationPage from '../pages/COYourInformationPage'
import COOverviewPage from '../pages/COOverviewPage'
import COCompletePage from '../pages/COCompletePage'
import { URLS, CREDENTIALS, YOUR_INFORMATION } from '../data/Constants'



fixture('Checkout Feature Test')
    .page(URLS.LOGIN_PAGE)
    .beforeEach(async t =>{
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER)
        await t.expect(ProductsPage.btnShoppingCart.exists).ok()
        await ProductsPage.addItemToCart('Backpack')
        await ProductsPage.clickShoppingCartBtn()
        await t.expect(CartPage.lblItemBackpack.exists).ok()
        await CartPage.clickCheckutBtn()
        await t.expect(COYourInformationPage.txtFirstName.exists).ok()
    })

    test('7 - Continue with missing name information', async t => {
        await COYourInformationPage.submitYourInformationForm(YOUR_INFORMATION.MISSING_FIRST_NAME)
        await t.expect(COYourInformationPage.errorMsgMissingFirstName.exists).ok()
    })

    test('8 - Fill user\'s information', async t => {
        await COYourInformationPage.submitYourInformationForm(YOUR_INFORMATION.VALID_INFO)
        await t.expect(COOverviewPage.btnFinish.exists).ok()
    })

    test('9 - Final order items', async t => {
        await COYourInformationPage.submitYourInformationForm(YOUR_INFORMATION.VALID_INFO)
        await t.expect(COOverviewPage.lblItemBackpack.exists).ok()
    })

    test('10 - Complete a purchase', async t => {
        await COYourInformationPage.submitYourInformationForm(YOUR_INFORMATION.VALID_INFO)
        await t
            .click(COOverviewPage.btnFinish)
            .expect(COCompletePage.ponyExpress.exists).ok()
    })