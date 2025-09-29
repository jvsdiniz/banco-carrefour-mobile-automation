const assert = require('chai').assert

class HomeScreen {

    get acessarPaginaHome() { return $('~Home') }
    get tituloPaginaHome() { return $('android=new UiSelector().text("WEBDRIVER")') }
    get subtituloPaginaHome() { return $('android=new UiSelector().text("Demo app for the appium-boilerplate")') }
    get supportHome() { return $('android=new UiSelector().text("Support")') }
    get logoHome() { return $('android=new UiSelector().className("android.widget.ImageView").instance(0)') }

    async navegarParaHome() {
        await this.acessarPaginaHome.click(); 
        await this.tituloPaginaHome.waitForDisplayed({ timeout: 5000 });
    }

    async validarElementosVisiveisHome() {
        await this.navegarParaHome(); 

        const tituloEsperado = "WEBDRIVER";
        const tituloAtual = await this.tituloPaginaHome.getText();
        assert.equal(
            tituloAtual,
            tituloEsperado,
            `[FAIL: Título] O título esperado '${tituloEsperado}' não corresponde ao atual '${tituloAtual}'.`
        );

        assert.isTrue(
            await this.subtituloPaginaHome.isDisplayed(),
            '[FAIL: Subtítulo] O subtítulo "Demo app for the appium-boilerplate" não está visível.'
        );

        assert.isTrue(
            await this.supportHome.isDisplayed(),
            '[FAIL: Support] O texto "Support" não está visível.'
        );

        assert.isTrue(
            await this.logoHome.isDisplayed(),
            '[FAIL: Logo] O logo principal não está visível.'
        );
    }

}
export default HomeScreen;