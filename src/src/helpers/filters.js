const helpers = {
    displayState : function(layerNb, state) {
        if (state){
            return config.config.visState.layers[layerNb].config.isVisible = true
        }
        else {
            return config.config.visState.layers[layerNb].config.isVisible = false
        }
        
    }
}

export default helpers
