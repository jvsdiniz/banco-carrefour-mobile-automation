# 🔵 Desafio Técnico - Banco Carrefour | Mobile 

Este repositório tem como objetivo demonstrar automações aplicadas em dispositivos mobile com o [app do framework WebdriverIO](https://github.com/webdriverio/native-demo-app/releases) através de scripts automatizados, são realizados testes que validam comportamentos esperados e cenários diversos.

## 🛠️ Tecnologias e bibliotecas utilizadas

- **[WebdriverIO](https://webdriver.io/)** - Framework de testes E2E para dispositivos mobile e front-end.
- **[Appium](https://appium.io/docs/en/latest/)** - Motor da automação.
- **`appium-uiautomator2-driver`** - Comunicação e execução no Android.
- **`@wdio/browserstack-service`** - Integração com o BrowserStack, essencial para o CI/CD.
- **`@wdio/local-runner	`** - Para os testes locais.
- **`@wdio/mocha-framework`** - Estruturação e organização dos cenários de teste.
- **[Chai](https://www.chaijs.com/)** - Para validações nos testes.
- **`@wdio/spec-reporter`** - Reporter padrão.

## 💻 Pré-requisitos

### Node JS
- [Node.js](https://www.nodejs.tech/pt-br/download) versão recomendada: 20 ou superior

### Java JDK & JAVA_HOME configurados

- [Open JDK](https://openjdk.org)
- [JAVA_HOME - Windows](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)
- [JAVA_HOME - Mac](https://mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/)

Verifique a versão do java:
```
java -version
```

Verifique se sua variavel JAVA_HOME está correta:
```
echo %JAVA_HOME%
```

### Android

- [Android Studio](https://developer.android.com/studio?hl=es-419&gclsrc=aw.ds&gclid=Cj0KCQjwyOuYBhCGARIsAIdGQRNrDv20QvoOy_-I5E1LoZdOLu3nvhlwX_7EjPeHcE1kGQNNcIVOme0aAqckEALw_wcB)
- [ANDROID_HOME - Windows](https://www.testingdocs.com/setting-android_home-environment-variable-on-windows/)
- [ANDROID_HOME - Mac](https://stackoverflow.com/questions/19986214/setting-android-home-enviromental-variable-on-mac-os-x)


### Appium Inspector

- [Download Appium Inspector](https://github.com/appium/appium-inspector/releases)

Para este projeto você pode usar a seguinte configuração:

| Server Key | Server Value |
| ------------- | ------------- |
| Remote Host | 0.0.0.0 |
| Remote Port | 4723 |
| Remote Path | / |

Android Capabilities
| Capability Key  | Capability Value |
| ------------- | ------------- |
| platformName  | Android |
| platformVersion  | [OS VERSION / IMAGE]  |
| deviceName | [EMULATED_DEVICE_NAME] | 
| app | /[PROJECT_PATH]/[APP_NAME].apk |
| appium:automationName | UIAutomator2 |

### Appium
- [Appium](https://appium.io)

Execute no prompt de comando para instalação global:
```
npm install -g appium@next
```

Cheque a versão usando o comando:
```
appium -v
```

### Appium Doctor
- [Appium Doctor Package](https://github.com/appium/appium-doctor)

Execute no prompt de comando para instalação global:
```
npm install appium-doctor -g
```

Execute para verficar se o ambiente está ok:
And then use the library:
``` 
appium-doctor
```

### Appium Drivers

Instale os drivers ios/android para conseguir executar os testes:
``` 
appium driver install xcuitest
appium driver install uiautomator2
```

## 🚀 Instalação

Para instalação do projeto siga eesses passos:

- Clonar repositório:
```
git clone https://github.com/jvsdiniz/banco-carrefour-mobile-automation.git
```

Instalar as dependências do projeto com o comando:
```
npm install
```

## ▶️ Execução do projeto

Ao clonar o repositório a configuração estará setada para rodar no browserstack, em virtude do CI/CD. Você deve descomentar a parte indicada e comentar a parte do uso do browserstack no arquivo `wdio.conf.js`.

- Com o emulador e appium rodando, execute:
```
npx wdio
```

- Para executar um cenário específico (Troque o login pelo cenário desejado):
```
npx wdio run wdio.conf.js --spec ./test/specs/login.js
``` 

## 📁 Estrutura do projeto
```bash
BANCO-CARREFOUR-MOBILE-AUTOMATION/
├── .github/
│   └── workflows/
│       └── mobile-tests.yml     # Configuração do GitHub Actions (CI/CD)
├── app/
│   └── android/
│       └── native-demo-app.apk  # Arquivo APK do aplicativo a ser testado
├── node_modules/              # Módulos e dependências instaladas (npm)
├── test/                      # Contém toda a lógica e dados dos testes
│   ├── data/                    # Dados de entrada dos testes 
│   ├── screen-objects/          # Implementação do Padrão Screen Object (POM)
│   └── specs/                   # Arquivos de especificação (casos de teste)
├── .gitignore                 # Arquivos e pastas a serem ignorados pelo Git
├── package.json               # Configuração do projeto e scripts
├── package-lock.json        # Versões exatas das dependências
├── README.md                # Documentação do projeto
└── wdio.conf.js               # Configuração principal do WebdriverIO
```

## 📚 Casos de Teste

Os casos de teste automatizados neste projeto foram desenvolvidos com um duplo propósito:

Demonstrar a Funcionalidade Crítica do Aplicativo (Happy Path): A suíte de testes cobre as principais interações e fluxos do aplicativo, como login, navegação na tela principal e interação com formulários. O foco é validar o que o aplicativo faz de mais importante, garantindo que o "caminho feliz" do usuário esteja sempre funcional.

Exibir o Conhecimento e as Melhores Práticas de Automação: Além de testar o app, a estrutura do projeto serve como um demonstrativo de conhecimentos em automação mobile, incluindo:

- Implementação do Padrão Screen Object (Page Object Model) para código limpo e de fácil manutenção.
- Uso de seletores específicos de plataforma (UiSelector) para Android.
- Configuração robusta de CI/CD e integração com serviços de nuvem (BrowserStack) para escalabilidade e desempenho.

## ✅ CI/CD + BrowserStack

Este projeto inclui um fluxo de trabalho do GitHub Actions que executa automaticamente seus testes do BrowserStack Android em cada solicitação push e pull. O fluxo de trabalho é configurado para fornecer feedback rápido e relatórios detalhados.

**Para controle de usuarios/key poderiamos criar Secrets no repositório**

## 👨‍💻 Autor
Desenvolvido por João Diniz
- 📧 jdinizctt@gmail.com
- 📧 [Linkedin](https://www.linkedin.com/in/jvsdiniz/)

