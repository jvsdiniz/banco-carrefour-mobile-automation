import LoginScreen from "../screen-objects/login.screen"

const assert = require('chai').assert
const dadosTelaLogin = require('../data/telaLogin.json')
const loginScreen = new LoginScreen()

describe('Tela de Login e Cadastro', () => {

   it('Falha - Realizar Login sem preencher os campos obrigatórios', async () => {
      const erroEmailEsperado = 'Please enter a valid email address'
      const erroPasswordEsperado = 'Please enter at least 8 characters'

      await loginScreen.acessarPaginaLogin.click()
      await loginScreen.botaoLogin.click()

      const erroEmailAtual = await loginScreen.erroEmailLogin();
      const erroPasswordAtual = await loginScreen.erroPasswordLogin();

      assert.equal(
         erroEmailAtual,
         erroEmailEsperado,
         `Erro de E-mail: A mensagem de erro exibida ('${erroEmailAtual}') não é a esperada ('${erroEmailEsperado}').`
      );

      assert.equal(
         erroPasswordAtual,
         erroPasswordEsperado,
         `Erro de Senha: A mensagem de erro exibida ('${erroPasswordAtual}') não é a esperada ('${erroPasswordEsperado}').`
      );
   })


   it('Falha - Realizar cadastro sem preencher os campos obrigatórios', async () => {
      const erroEmailEsperado = 'Please enter a valid email address'
      const erroPasswordEsperado = 'Please enter at least 8 characters'
      const erroConfirmarPasswordEsperado = 'Please enter the same password'

      await loginScreen.acessarPaginaLogin.click()
      await loginScreen.abaSignUp.click()
      await loginScreen.botaoSignUp.click()

      const erroEmailAtual = await loginScreen.erroEmailLogin()
      const erroPasswordAtual = await loginScreen.erroPasswordLogin()
      const erroConfirmarPasswordAtual = await loginScreen.erroConfirmarPassword()

      assert.equal(
         erroEmailAtual,
         erroEmailEsperado,
         `Erro de E-mail: A mensagem de erro exibida ('${erroEmailAtual}') não é a esperada ('${erroEmailEsperado}').`
      );

      assert.equal(
         erroPasswordAtual,
         erroPasswordEsperado,
         `Erro de Senha: A mensagem de erro exibida ('${erroPasswordAtual}') não é a esperada ('${erroPasswordEsperado}').`
      );

      assert.equal(
         erroConfirmarPasswordAtual,
         erroConfirmarPasswordEsperado,
         `Erro de Senha: A mensagem de erro exibida ('${erroConfirmarPasswordAtual}') não é a esperada ('${erroConfirmarPasswordEsperado}').`
      );
   })

   dadosTelaLogin.forEach(data => {
      it('Sucesso - Realizar cadastro e validar mensagem de sucesso', async () => {

         await loginScreen.realizarCadastro(
            data.email,
            data.password,
            data.confirmarPassword
         )

         const tituloEsperado = 'Signed Up!'
         const mensagemEsperada = 'You successfully signed up!'

         await loginScreen.cadastroComSucessoTitulo.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: `O Título do pop-up ('${tituloEsperado}') não foi exibido.`
         });
         const tituloAtual = await loginScreen.cadastroComSucessoTitulo.getText();

         assert.equal(
            tituloAtual,
            tituloEsperado,
            `Erro de Título: O texto exibido ('${tituloAtual}') não é o esperado ('${tituloEsperado}').`
         );

         await loginScreen.cadastroComSucessoMensagem.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: `A Mensagem do pop-up ('${mensagemEsperada}') não foi exibida.`
         });
         const mensagemAtual = await loginScreen.cadastroComSucessoMensagem.getText();

         assert.equal(
            mensagemAtual,
            mensagemEsperada,
            `Erro de Mensagem: O texto exibido ('${mensagemAtual}') não é o esperado ('${mensagemEsperada}').`
         );

         const textoBotaoEsperado = 'OK';
         await loginScreen.botaoOkSucesso.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: `O botão 'OK' não foi exibido no pop-up.`
         });
         const botaoTextoAtual = await loginScreen.botaoOkSucesso.getText();

         assert.equal(
            botaoTextoAtual,
            textoBotaoEsperado,
            `Erro de Botão OK: O texto exibido ('${botaoTextoAtual}') não é o esperado ('${textoBotaoEsperado}').`
         );

         await loginScreen.botaoOkSucesso.click()
      })

      it('Sucesso - Realizar Login e validar mensagem de sucesso', async () => {

         await loginScreen.realizarLogin(
            data.email,
            data.password
         )

         const tituloEsperado = 'Success';
         const mensagemEsperada = 'You are logged in!';

         await loginScreen.loginComSucessoTitulo.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'O pop-up de Login com Sucesso não foi exibido dentro do tempo limite.'
         });

         const tituloEstaVisivel = await loginScreen.loginComSucessoTitulo.isDisplayed();
         assert.isTrue(
            tituloEstaVisivel,
            `Erro de Título: O título 'Success' não foi exibido.`
         );
         const tituloAtual = await loginScreen.loginComSucessoTitulo.getText();
         assert.equal(
            tituloAtual,
            tituloEsperado,
            `Erro de Título: O texto exibido ('${tituloAtual}') não é o esperado ('${tituloEsperado}').`
         );

         const mensagemAtual = await loginScreen.loginComSucessoMensagem.getText();
         assert.equal(
            mensagemAtual,
            mensagemEsperada,
            `Erro de Mensagem: O texto exibido ('${mensagemAtual}') não é o esperado ('${mensagemEsperada}').`
         );

         const botaoEstaVisivel = await loginScreen.botaoOkSucesso.isDisplayed();
         assert.isTrue(
            botaoEstaVisivel,
            `Erro de Botão: O botão 'OK' não foi exibido.`
         );
         const botaoTextoAtual = await loginScreen.botaoOkSucesso.getText();
         assert.equal(
            botaoTextoAtual,
            'OK',
            `Erro de Botão: O texto exibido no botão ('${botaoTextoAtual}') não é 'OK'.`
         );

         await loginScreen.botaoOkSucesso.click();
      })
   })

})