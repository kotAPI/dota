var zoom = 1;
const MAX_ZOOM_LIMIT = 7;
const MIN_ZOOM_LIMIT = 0.8;

let upArrow,downArrow,leftArrow,rightArrow;

function navigation(navigationConfig) {
    
    navigationConfig.cameras.main.setZoom(zoom);
    return {
        setUpNavigation() {

            // zoom functionality
            navigationConfig.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {
                zoom -= deltaY * 0.005
                if (zoom <= MIN_ZOOM_LIMIT) {
                    zoom = MIN_ZOOM_LIMIT;
                }
                if (zoom >= MAX_ZOOM_LIMIT) {
                    zoom = MAX_ZOOM_LIMIT;
                }
                navigationConfig.cameras.main.setZoom(zoom);
            });
        },
        updateNavigation(){
            
        }
    }
}

export default navigation;