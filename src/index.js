import './style.css';
import Phaser from "phaser";
import config from "./js/config"

import Dota from "./js/scenes/dota"
import LoadingScreen from "./js/scenes/loadscreen"






//config.scene = [LoadingScreen,Dota];
config.scene = [Dota];

new Phaser.Game(config);