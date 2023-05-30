import RegisterPage from '../pageobjects/register.page';
import BasicInfoPage from '../pageobjects/basicinfo.page';
import { Email, Password, FirstName, LastName, MobileNumber, ZipCode } from '../data/datafile'
import emailFaker from '../utils/emailFaker';

describe('Register page', () => {
    before(async () => {
        await browser.maximizeWindow()   
   });

    it('should register with email & password', async () => {
        await RegisterPage.open()
        await RegisterPage.createAccount(emailFaker(Email), Password);
        await expect(BasicInfoPage.basicInfoTab).toHaveText('Basic Info', { ignoreCase: true });
    });

    it('insert details page', async () => {
        
        await expect(await BasicInfoPage.continueButton.isClickable()).toBe(false);
        
        await BasicInfoPage.completeBasicInfo(FirstName, LastName, MobileNumber, ZipCode);

        await expect(await BasicInfoPage.continueButton.isClickable()).toBe(true);
        await BasicInfoPage.continueButton.click();

        await expect(BasicInfoPage.confirmPhoneTab).toBeDisplayed();
        await expect(await BasicInfoPage.confirmPhoneTab.isExisting()).toBe(true);
    })
});


