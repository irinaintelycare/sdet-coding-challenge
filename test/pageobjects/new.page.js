export default class NewPage {

    open(path) {
        return browser.url('https://portal.dev.qa.automation3.legacy.intelycare.com/' + path);
        
    }
}