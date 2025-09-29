import WebviewScreen from "../screen-objects/webview.screen";

const assert = require('chai').assert
const webviewScreen = new WebviewScreen();

describe('Cenário: Interação e Navegação na WebView', () => {

    it('Sucesso - Deve fechar o aviso superior, navegar para "Why WebdriverIO?" e validar o título', async () => {
        await webviewScreen.acessarPaginaWebview.click();
        await webviewScreen.fecharAvisoSuperior.click();
        await webviewScreen.acessarPaginaWhyWebdriverIO();

        const tituloEsperado = "Why Webdriver.IO?";

        await webviewScreen.tituloPaginaWebdriver.waitForDisplayed({ timeout: 5000 });

        const tituloAtual = await webviewScreen.tituloPaginaWebdriver.getText();

        assert.equal(
            tituloAtual,
            tituloEsperado,
            `[FAIL: Webview Título] O título da página destino ('${tituloAtual}') não é o esperado ('${tituloEsperado}').`
        );
    }); 
});