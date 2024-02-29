class Cena02 extends Phaser.Scene {
    constructor() {
        super('Cena02');
    }

    init(data) {
        this.playerName = data.playerName;
    }
    preload(){
        this.load.image('inteli','assets/logo-Inteli_branco.png')
        this.load.image('baosim', 'assets/baosim.png');
        this.load.image('baosimcor', 'assets/baosimcor.png');
        this.load.image('baonaocor', 'assets/baonaocor.png');
        this.load.image('baonao', 'assets/baonao.png');
    }
    create() {
        this.text = this.add.text(-100, 700, `Olá ${this.playerName}, bão?`, { fill: '#333' });
        this.botao1 = this.add.image(200, 400, "baosim")
        this.botao2 = this.add.image(600, 400, "baonao")
        this.botao1.setInteractive()
        this.botao2.setInteractive()
        this.botao1.on('pointerdown', () => this.scene.start('Cena03'));
        this.botao2.on('pointerdown', () => this.scene.start('Cena03'));

        botaoHover(this.botao1,'baosim','baosimcor')
        botaoHover(this.botao2,'baonao','baonaocor')


    }

    update(){
        if(this.text.x < 400){
            this.text.x += 10;
        }
        if(this.text.y>300){
            this.text.y -=10;
        }
    }
}