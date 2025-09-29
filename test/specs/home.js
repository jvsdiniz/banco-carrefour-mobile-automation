import HomeScreen from '../screen-objects/home.screen'

const assert = require('chai').assert
const homeScreen = new HomeScreen() 

describe('Tela Home', () => {

    it('Sucesso - Deve validar a visibilidade de todos os elementos chave da tela Home', async () => {
        await homeScreen.validarElementosVisiveisHome();
    });

})