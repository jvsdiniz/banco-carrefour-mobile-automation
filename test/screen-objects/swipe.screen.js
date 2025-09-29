class SwipeScreen {

    get acessarPaginaSwipe() { return $('~Swipe') }
    get tituloSwipe() { return $('android=new UiSelector().text("Swipe horizontal")') }
    get tituloSlideAtual() { return $('android=new UiSelector().text("FULLY OPEN SOURCE")') }

    async navegarParaSwipe() {
        await this.acessarPaginaSwipe.click();
        await this.tituloSwipe.waitForDisplayed({ timeout: 5000 });
    }

    async getScreenSize() {
        return browser.getWindowSize();
    }

    async calculateSwipeLeftCoordinates() {
        const { width, height } = await this.getScreenSize();
        const y = height / 2;
        const startX = width * 0.90;
        const endX = width * 0.10;
        return { y, startX, endX };
    }

    async swipeLeft() {
        const { y, startX, endX } = await this.calculateSwipeLeftCoordinates();

        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: y },
                    { type: 'pointerDown' },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 800, x: endX, y: y },
                    { type: 'pointerUp' }
                ]
            }
        ]);
    }



}
export default SwipeScreen