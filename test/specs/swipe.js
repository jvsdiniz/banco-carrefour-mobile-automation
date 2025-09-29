import SwipeScreen from "../screen-objects/swipe.screen";

const assert = require('chai').assert
const swipeScreen = new SwipeScreen()

describe('Tela Swipe', () => {

    it('Sucesso - Utilização do Swipe Horizontal', async () => {

        await swipeScreen.navegarParaSwipe();

        const tituloSlide1 = "FULLY OPEN SOURCE";
        const tituloSlide2Esperado = "GREAT COMMUNITY"; 
        
        const tituloAtual = await swipeScreen.tituloSlideAtual.getText();
        assert.equal(tituloAtual, tituloSlide1, 'O slide inicial não é o esperado.');

        await swipeScreen.swipeLeft(); 

        const proximoSlide = $(`android=new UiSelector().text("${tituloSlide2Esperado}")`);
        await proximoSlide.waitForDisplayed({ timeout: 5000 });
        const tituloProximoSlide = await proximoSlide.getText();
        assert.equal(
            tituloProximoSlide,
            tituloSlide2Esperado,
            `[FAIL: Swipe] O próximo slide ('${tituloProximoSlide}') não é o esperado ('${tituloSlide2Esperado}').`
        );
    });
});