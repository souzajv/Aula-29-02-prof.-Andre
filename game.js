window.onload = function() {
    const config = {
        type: Phaser.AUTO,
        parent: 'phaser-example',
        width: 800,
        height: 600,
        backgroundColor: "b9eaff",
        scene: [Cena01, Cena02, Cena03]
    };

    const game = new Phaser.Game(config);

}

function botaoHover(botao, textura1, textura2){
    botao.on("pointerover", () => botao.setTexture(textura2));
    botao.on("pointerout", () => botao.setTexture(textura1));
}
