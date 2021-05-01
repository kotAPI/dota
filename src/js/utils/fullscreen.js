function fullscreen(game) {
    var fullscreen = game.device.fullscreen;
    var canvas = game.canvas

    return {
        goFullscreen() {
            canvas[fullscreen.request]();
        }
    }
}

export default fullscreen;