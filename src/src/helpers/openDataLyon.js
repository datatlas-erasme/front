const helpers = {
    formatData : async function(url){
        const response = await fetch(
            url
        );
        const data = await response.json();
    
        const fields = data.features.map(item => {
            const properties = Object.keys(item.properties).map(prop => ({
                name: prop,
                format: "",
                type: "string"
            }))
            properties.push({"name" : "latitude", "format": "", "type" : "number"})
            properties.push({"name" : "longitude", "format": "", "type" : "number"})
            return properties
        })
    
        const rows = data.features.map(item => {
            const array = Object.values(item.properties)
            array.push(item.geometry.coordinates[1])
            array.push(item.geometry.coordinates[0])

            return Object.assign({},array)
        })
    
    
        const formatData = {
            fields: fields[0] ,
            rows: rows
        }
        return formatData
    }
}

export default helpers
