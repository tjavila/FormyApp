import { Selector, t } from 'testcafe';

class utils{
    constructor(){
        this.submitForm = Selector('a').withText('Submit');
        this.successText = Selector('h1');
    }
    async resizeWindow(size){
        await t
            .resizeWindowToFitDevice(size);
    }

    async checkSuccessText(){
        await t
            .click(this.submitForm)
            .expect(this.successText.textContent).eql('Thanks for submitting your form');
    }
}
export default new utils();