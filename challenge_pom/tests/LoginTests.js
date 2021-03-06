import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { URLS, CREDENTIALS } from '../data/Constants'

fixture('Login Feature Test')
    .page(URLS.LOGIN_PAGE)

test('1 - Login with a valid user', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER)
    await t.expect(ProductsPage.btnShoppingCart.exists).ok()
})

test('2 - Login with an invalid user', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER)
    await t.expect(LoginPage.errorMsgInvalidUser.exists).ok()
})

test('3 - Logout from Products page', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER)
    await ProductsPage.selectMenuOption('Logout')
    await t.expect(LoginPage.btnLogin.exists).ok()
})