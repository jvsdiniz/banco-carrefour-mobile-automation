import { assert } from 'chai' 

class FormsScreen {

    get acessarPaginaForms() { return $('~Forms') }
    get tituloPaginaForms() { return $(`android=new UiSelector().text("Form components")`) }
    get campoDigiteAlgo() { return $('~text-input') }
    get campoAlgoDigitado() { return $('~input-text-result') }
    get switch() { return $('~switch') }
    get textoSwitch() { return $('~switch-text') }
    get dropdownClique() { return $('android=new UiSelector().className("android.view.ViewGroup").instance(12)') }
    get dropdownTextoSelecionado() { return $('id=text_input') }
    get listaOpcoesDropdown() { return $(`id=com.wdiodemoapp:id/select_dialog_listview`) }
    get tituloBotaoActive() { return $(`android=new UiSelector().resourceId("android:id/alertTitle")`) }
    get mensagemBotaoActive() { return $(`android=new UiSelector().resourceId("android:id/message")`) }
    get botaoActive() { return $(`android=new UiSelector().text("Active")`) }
    get botaoInactive() { return $(`android=new UiSelector().text("Inactive")`) }
    get botaoOkSucesso() { return $(`id=android:id/button1`) }

    async navegarParaForms() {
        await this.acessarPaginaForms.click()
        await this.tituloPaginaForms.waitForDisplayed({ timeout: 5000 })
    }

    async selecionarOpcaoDropdown(opcaoDesejada) {
        await this.dropdownClique.click()
        const opcao = $(`android=new UiSelector().text("${opcaoDesejada}")`)
        await opcao.waitForDisplayed({ timeout: 5000 })
        await opcao.click()
    }

    async validarAlertaBotaoActive(tituloEsperado, mensagemEsperada) {
        await this.tituloBotaoActive.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Alert do Botão Active não foi exibido.' })

        const tituloAlertAtual = await this.tituloBotaoActive.getText()
        assert.equal(
            tituloAlertAtual,
            tituloEsperado,
            `Erro Alert Título: O título do alert ('${tituloAlertAtual}') não é o esperado ('${tituloEsperado}').`
        )

        const mensagemAlertAtual = await this.mensagemBotaoActive.getText()
        assert.equal(
            mensagemAlertAtual,
            mensagemEsperada,
            `Erro Alert Mensagem: A mensagem do alert ('${mensagemAlertAtual}') não é a esperada ('${mensagemEsperada}').`
        )

        await this.botaoOkSucesso.click()
    }


}
export default FormsScreen