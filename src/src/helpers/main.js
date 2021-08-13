import openDataLyon from "../helpers/openDataLyon";
import geoserver from "../helpers/geoserver";


const helpers = {
    formatData : function(url, type) {
        if (type === "geoserver"){
            return geoserver.formatData(url)
        
        }
        else if (type === "openDataLyon") {
            return openDataLyon.formatData(url)
        }
        
    }
}

export default helpers
