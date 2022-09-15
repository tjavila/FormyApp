//importa módulo testecafé
import { Selector } from 'testcafe';
import formFill from './page-objects/formFill';
import utils from './page-objects/utils';

//declara a fixture
fixture`FormyApp Test Suite`
    .page`https://formy-project.herokuapp.com/form`;

test('Fill out form', async t => {
    await formFill.typeUserName('Tayssa');
    await formFill.typeLastName('Avila');
    await formFill.typeJobTitle('Test Analyst');
    await formFill.selectEducationLevel();
    await formFill.selectYourSex();
    await formFill.selectYearsOfExperience();
    await formFill.selectDate('16/11/1997');
    await formFill.submitForm();
    
});


test('Resize window test', async t => {
    await utils.resizeWindow('iphonexr');
});

test('Check sucess text', async t => {
    await utils.checkSuccessText();
});