import FormsScreen from "../screen-objects/forms.screen"

const assert = require('chai').assert
const dadosTelaForms = require('../data/telaForms.json')
const formsScreen = new FormsScreen()

describe('Tela de formulário', () => {

    const switchTextoON = 'Click to turn the switch OFF'
    const tituloAlertEsperado = 'This button is'
    const mensagemAlertEsperada = 'This button is active'
    const tituloEsperado = "Form components"

    dadosTelaForms.forEach(data => {

        it('Sucesso - Preenchimento e validação da tela Forms', async () => {

            await formsScreen.navegarParaForms()
            await formsScreen.campoDigiteAlgo.setValue(data.textoDigitado)

            const resultadoInputEsperado = `${data.textoDigitado}`
            await formsScreen.campoAlgoDigitado.waitForDisplayed({ timeout: 5000 })
            const textoAtualInput = await formsScreen.campoAlgoDigitado.getText()

            assert.equal(
                textoAtualInput,
                resultadoInputEsperado,
                `[FALHA: Campo Digitado] O texto exibido ('${textoAtualInput}') não é o valor esperado ('${resultadoInputEsperado}').`
            )


            await formsScreen.switch.click() 

            const switchStatus = await formsScreen.switch.getAttribute('checked')
            const switchTextoAtual = await formsScreen.textoSwitch.getText()

            assert.equal(
                switchStatus,
                'true',
                `[FALHA: Switch] O switch não está ativado ('true'). Estado atual: ${switchStatus}.`
            )
            assert.equal(
                switchTextoAtual,
                switchTextoON,
                `[FALHA: Switch Texto] O texto do switch ('${switchTextoAtual}') não é o esperado ('${switchTextoON}').`
            )

            await formsScreen.selecionarOpcaoDropdown(data.escolhaDropdown)


            await formsScreen.botaoActive.click()
            await formsScreen.validarAlertaBotaoActive(tituloAlertEsperado, mensagemAlertEsperada)


            await formsScreen.botaoInactive.click()
            const tituloAtual = await formsScreen.tituloPaginaForms.getText()
            assert.equal(
                tituloAtual,
                tituloEsperado,
                `[FALHA: Botão Inactive] O título da página ('${tituloAtual}') não é o esperado ('${tituloEsperado}').`
            )

        })

    })


})