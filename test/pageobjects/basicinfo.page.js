import { randomIntFromInterval } from "../utils/randomNumber";

class BasicInfoPage {
    get basicInfoTab() {
        return $('[automation-id="basic-info"] .activebar');
    }
    get confirmPhoneTab(){
        return $('[automation-id="phonevalidate"] .activebar');
    }
    get firstName() {
        return $('input[automation-id="first-name-answer"]');
    }
    get lastName() {
        return $('#input_4');
    }
    get mobileNumber() {
        return $('#input_5');
    }
    get zipCode() {
        return $('#input_6');
    }
    get qualificationTypeSelect() {
        return $('#select_8');
    }
    get qualificationTypeOptions() {
       return $('#select_container_9').$$('md-option');
    
    }
    get rnOption() {
        return $('#select_option_13');
    }
    get shiftInterestedList() {
        // https://webdriver.io/docs/api/element/$$/
        return $('[automation-id="interested-shift-types-answer"]').$$('md-checkbox');
    }
    get workExperienceList() {
        return $('[automation-id="please-select-your-amount-of-licensed-work-experience-below-answer"]').$$('md-radio-button');
    }
    get termsAccept() {
        return $('[automation-id="termsAccept-answer"]');
    }
    get continueButtonDisabled() {
        // isclickable = false  / isEnabled()
        return $('#AP_Basic_Info_continue.disabled');
    }
    get continueButton() {
        return $('#AP_Basic_Info_continue');
    }
    get body() {
        return $('body');
    }



    //async selectRandomOneQualificationType() {
       // await this.qualificationTypeSelect.click();
       // const qualTypes = await this.qualificationTypeOptions;
       // await qualTypes[randomIntFromInterval(0, qualTypes.length - 1)].click();
   // }

    async checkAllShiftInteresed() {
        const interestedList = await this.shiftInterestedList;
        interestedList.forEach(async (el)=>{
            await el.click();
        })
    }

    async selectRandomOneWorkExperience() {
        const weList = await this.workExperienceList;
        await weList[randomIntFromInterval(0, weList.length - 1)].click();
    }

    async completeBasicInfo(firstName, lastName, phoneNumber, zipCode) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.mobileNumber.setValue(phoneNumber);
        await this.zipCode.setValue(zipCode);
        
        await this.qualificationTypeSelect.click();
        await this.rnOption.click();
        await this.body.click();
        await this.checkAllShiftInteresed();
        await this.selectRandomOneWorkExperience();
        await this.termsAccept.click();
    }
}

export default new BasicInfoPage();