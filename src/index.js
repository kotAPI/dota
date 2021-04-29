import './style.css';
import Phaser from "phaser";
import config from "./js/config"

import Dota from "./js/scenes/dota"

config.scene=Dota;
new Phaser.Game(config);