/**
 * Gets email template and appends miliseconds to username.
 * For example if you pass testautomation@mailinator.com,
 * it will return testautomation-1683491063867@mailinator.com
 * @param {*} email 
 * @returns email generated appending miliseconds to username
 */
export default function emailFaker(email) {
    const emailSplitted = email.split('@');
    const miliseconds = new Date().getTime();
    return `${emailSplitted[0]}-${miliseconds}@${emailSplitted[1]}`;
}