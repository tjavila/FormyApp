import { Selector, t } from 'testcafe';

class formFill{
    constructor(){
        this.firstName = Selector('#first-name');
        this.lastName = Selector('#last-name');
        this.jobTitle = Selector('#job-title');
        this.educationLevel = Selector('#radio-button-2');
        this.yourSex = Selector('#checkbox-2');
        this.yearsOfExperience = Selector('option').withText('0-1');
        this.datePicker = Selector('#datepicker');
        this.submitForm = Selector('a').withText('Submit');
    }

    async typeUserName(name){
        await t
            .typeText(this.firstName, name);
    }

    async typeLastName(name){
        await t
            .typeText(this.lastName, name);
    }

    async typeJobTitle(jobTitle){
        await t
            .typeText(this.jobTitle, jobTitle);
    }

    async selectEducationLevel(){
        await t
            .click(this.educationLevel);
    }

    async selectYourSex(){
        await t
            .click(this.yourSex);
    }

    async selectDate(date){
        await t
            .typeText(this.datePicker, date);
    }
    async selectYearsOfExperience(){
        await t
            .click(Selector('#select-menu'))
            .click(this.yearsOfExperience);
    }

    async submitForm(){
        await t
            .click(this.submitForm);
    }

}
export default new formFill();