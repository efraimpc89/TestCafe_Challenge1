import { Selector, t } from 'testcafe'

class COCompletePage {
    constructor(){
        this.ponyExpress = Selector('.pony_express')
    }

}
export default new COCompletePage()