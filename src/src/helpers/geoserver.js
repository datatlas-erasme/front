
const helpers = {
    formatData : async function(url){
        const response = await fetch(
            url
        );
        const data = await response.json();
    
        const fields = data.features.map(item => {
            //console.log(Object.keys(item.properties))
            const properties = Object.keys(item.properties).map(prop => ({
                name: prop,
                format: "",
                type: "string"
            }))
            //properties.push({"name" : "latitude", "format": "", "type" : "number"})
            //properties.push({"name" : "longitude", "format": "", "type" : "number"})
            return properties
        })
    
        const rows = data.features.map(item => {
            const array = Object.values(item.properties)

            return Object.assign({},array)
        })
    
        //console.log(rows)
    
        //console.log(fields[0])
    
        const formatData = {
            fields: fields[0] ,
            rows: rows
        }
        //console.log(formatData)
        return formatData
    }
}

export default helpers
