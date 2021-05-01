import dotalogo from "../../assets/loadscreen/dota-8bitlogo.png"

import fullscreen from "../utils/fullscreen"

let scene;
class LoadingScreen extends Phaser.Scene
{

    constructor ()
    {
        super('LoadingScreen');
    }
    preload ()
    {
        this.load.image('logo', dotalogo);
    }

    create ()
    {
        scene = this.scene.scene;
        let gameWidth = scene.sys.game.scale.gameSize.width;
        let gameHeight = scene.sys.game.scale.gameSize.height;

        let logoWeight = 240;
        let logoHeight = 240;
        let logo = scene.add.image(gameWidth/2, 250, 'logo').setScale(0.5)

       
       

        let play = this.add.text(gameWidth/3 + 180, 400, 'Play').setInteractive();
        let fullScreen = this.add.text(gameWidth/3 + 150, 430, 'Fullscreen').setInteractive();

        fullScreen.on('pointerup',()=>{
            fullscreen(this.sys.game).goFullscreen()
        },this)

        play.on('pointerup',()=>{
            this.scene.start('Dota');
        },this)
        
    }

    update ()
    {
       
    }

    render () {

        // game.debug.text('Click / Tap to go fullscreen', 270, 16);
        // game.debug.text('Click / Tap to go fullscreen', 0, 16);
        console.log(this.game)
        this.game.debug.inputInfo(32, 32);
        // game.debug.pointer(game.input.activePointer);
    
    }


 
}

export default LoadingScreen