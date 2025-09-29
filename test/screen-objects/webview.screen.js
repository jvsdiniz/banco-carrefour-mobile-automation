import { assert } from 'chai';

class WebviewScreen {

    get acessarPaginaWebview() { return $('~Webview') }
    get fecharAvisoSuperior() { return $('android=new UiSelector().text("Close")') }
    get iconeWebdriver() { return $('android=new UiSelector().text("WebdriverIO")') }
    get tituloWebview() { return $('android=new UiSelector().text("Next-gen browser and mobile automation test framework for Node.js")') }
    get menuHamburguer() { return $('android=new UiSelector().text("Toggle navigation bar")') }
    get segundaOpcaoParaClicar() { return $('~Why WebdriverIO?') }
    get tituloPaginaWebdriver() { return $('android=new UiSelector().text("Why Webdriver.IO?").instance(1)') }

    async acessarPaginaWhyWebdriverIO() {
        await this.segundaOpcaoParaClicar.waitForDisplayed({ timeout: 5000 });
        await this.segundaOpcaoParaClicar.click();
    }

    async aguardarEFecharAvisoSuperior(){
        await this.fecharAvisoSuperior.waitForDisplayed({ timeout: 10000 });
        await this.fecharAvisoSuperior.click(); 
    }


}
export default WebviewScreen