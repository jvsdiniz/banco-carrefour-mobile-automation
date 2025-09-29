class LoginScreen {

    get acessarPaginaLogin() { return $('~Login') }
    get campoEmail() { return $('~input-email') }
    get campoPassword() { return $('~input-password') }
    get campoConfirmarPassword() { return $('~input-repeat-password') }
    get mensagemErroEmailLogin() { return $(`android=new UiSelector().text("Please enter a valid email address")`) }
    get mensagemErroPasswordLogin() { return $(`android=new UiSelector().text("Please enter at least 8 characters")`) }
    get mensagemErroConfirmarPassword() { return $(`android=new UiSelector().text("Please enter the same password")`) }
    get abaLogin() { return $(`android=new UiSelector().text("Login").instance(0)`) }
    get abaSignUp() { return $(`android=new UiSelector().text("Sign up")`) }
    get cadastroComSucessoTitulo() { return $(`android=new UiSelector().resourceId("android:id/alertTitle")`) }
    get cadastroComSucessoMensagem() { return $(`android=new UiSelector().resourceId("android:id/message")`) }
    get loginComSucessoTitulo() { return $(`android=new UiSelector().resourceId("android:id/alertTitle")`) }
    get loginComSucessoMensagem() { return $(`android=new UiSelector().resourceId("android:id/message")`) }
    get botaoOkSucesso() { return $(`id=android:id/button1`) }
    get botaoLogin() { return $(`android=new UiSelector().text("LOGIN")`) }
    get botaoSignUp() { return $(`android=new UiSelector().text("SIGN UP")`) }

    async erroEmailLogin() {
        await this.mensagemErroEmailLogin.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'A mensagem de erro não foi exibida no tempo esperado.'
        })
        return this.mensagemErroEmailLogin.getText();
    }

    async erroPasswordLogin() {
        await this.mensagemErroEmailLogin.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'A mensagem de erro não foi exibida no tempo esperado.'
        })
        return this.mensagemErroPasswordLogin.getText();
    }

    async erroConfirmarPassword() {
        await this.mensagemErroConfirmarPassword.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'A mensagem de erro não foi exibida no tempo esperado.'
        })
        return this.mensagemErroConfirmarPassword.getText()
    }

    async realizarLogin(email, password) {
        await this.acessarPaginaLogin.click()
        await this.abaLogin.click()
        await this.campoEmail.setValue(email)
        await this.campoPassword.setValue(password)
        await this.botaoLogin.click()
    }

    async realizarCadastro(email, password, confirmarPassword){
        await this.acessarPaginaLogin.click()
        await this.abaSignUp.click()
        await this.campoEmail.setValue(email)
        await this.campoPassword.setValue(password)
        await this.campoConfirmarPassword.setValue(confirmarPassword)
        await this.botaoSignUp.click()
    }


}
export default LoginScreen;