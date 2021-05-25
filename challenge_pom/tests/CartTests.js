import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import { URLS, CREDENTIALS} from '../data/Constants'

fixture('Shopping Cart Feature Test')
    .page(URLS.LOGIN_PAGE)
    .beforeEach(async t =>{
        LoginPage.submitLoginForm(CREDENTIALS.VALID_USER)
        await t.expect(ProductsPage.lblProducts.exists).ok
    })
    
test('4 - Navigate to the shopping cart', async t => {

    ProductsPage.clickShoppingCartBtn()
    await t.expect(CartPage.lblYourCart.exists).ok
})

test('5 - Add a single item to the shopping cart', async t => {
    ProductsPage.addItemToCart('Backpack')
    ProductsPage.clickShoppingCartBtn()
    await t.expect(CartPage.lblItemBackpack.exists).ok
})

test('6 - Add multiple items to the shopping cart', async t => {
    ProductsPage.addItemToCart('Backpack')
    ProductsPage.addItemToCart('Bike Light')
    ProductsPage.clickShoppingCartBtn()
    await t.expect(CartPage.lblItemBackpack.exists && CartPage.lblItemBikeLight.exists).ok
})