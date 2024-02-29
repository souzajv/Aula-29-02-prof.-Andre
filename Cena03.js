class Cena03 extends Phaser.Scene {
    constructor() {
        super('Cena03');
    
    }
    
    init(data) {
        this.playerName = data.playerName;
    }

    preload() {
        this.load.image('bg','assets/bg_azul-claro.png');
        this.load.image('inteli','assets/logo-Inteli_branco.png')
        this.load.image('siriguejo','assets/siriguejo/crustaceo.png')
    }
    
    create() {
            this.add.image(400, 300, 'bg');
            this.siri = this.add.image(400, 300, 'siriguejo');
            this.add.text(150, 100,`${this.playerName} então cê tá bão msm :)`,{fontSize: '60px', fill: '#000'})
        }
        
    update() {
        this.siri.x = this.input.x;
        this.siri.y = this.input.y;

}}
 var nometext