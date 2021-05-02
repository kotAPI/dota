
const MOVE_SPEED = 20;
let mapper = function(config){
    let upArrow, downArrow, leftArrow, rightArrow
    let api ={
        initMapper(){
            upArrow = config.input.keyboard.addKey('UP');  // Get key object
            downArrow = config.input.keyboard.addKey('DOWN');
            leftArrow = config.input.keyboard.addKey('LEFT');
            rightArrow = config.input.keyboard.addKey('RIGHT');

            config.cameras.main.scrollX = 0;

            return api;
        },
        handleKeyActions(){
            if (leftArrow.isDown) {
                config.cameras.main.scrollX -= MOVE_SPEED;
            }
            if (rightArrow.isDown) {
                config.cameras.main.scrollX += MOVE_SPEED;
            }
            if (upArrow.isDown) {
                config.cameras.main.scrollY -= MOVE_SPEED;
            }
            if (downArrow.isDown) {
                config.cameras.main.scrollY += MOVE_SPEED;
            }
            return api;
        }

    }

    return api;
}

export default mapper;