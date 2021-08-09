# Python program to read
# json file
  
  
import json
  
# Opening JSON file
f = open('data/ter_territoire.terpopulation_latest.json',)
  
# returns JSON object as 
# a dictionary
data = json.load(f)


formatData = {
    "fields": [
        {"name": "commune", "format": "", "type":"string"},
        {"name": "pop2018", "format": "", "type":"string"},
        {"name": "pop2017", "format": "", "type":"string"},
        {"name": "pop2016", "format": "", "type":"string"},
        {"name": "pop2015", "format": "", "type":"string"},
        {"name": "pop2014", "format": "", "type":"string"},
        {"name": "pop2013", "format": "", "type":"string"},
        {"name": "pop2012", "format": "", "type":"string"},
        {"name": "pop2011", "format": "", "type":"string"},
        {"name": "pop2010", "format": "", "type":"string"},
        {"name": "density", "format": "", "type":"array"},
        {"name": "Polygon", "format": "", "type":"LineString"}

    ],
    "rows" : [

    ]
}
# Iterating through the json
# list
loop = 0
for i in data['features']:
    loop = loop +1 
    name = i['properties']['commune']
    pop2018 = i['properties']['pop2018']
    pop2017 = i['properties']['pop2017']
    pop2016 = i['properties']['pop2016']
    pop2015 = i['properties']['pop2015']
    pop2014 = i['properties']['pop2014']
    pop2013 = i['properties']['pop2013']
    pop2012 = i['properties']['pop2012']
    pop2011 = i['properties']['pop2011']
    pop2010 = i['properties']['pop2010']
    density = [pop2018,pop2017,pop2016,pop2015,pop2014,pop2013,pop2012,pop2011,pop2010]


    geometry = i['geometry']


    formatData["rows"].append(
        {
            0 : name,
            1: pop2018,
            2: pop2017,
            3: pop2016,
            4: pop2015,
            5: pop2014,
            6: pop2013,
            7: pop2012,
            8: pop2011,
            9: pop2010,
            10: density,
            11: geometry
        }
        )
    '''if loop == 5:
        print(formatData)
        exit()'''
    #print(formatData)
# Closing file
f.close()

with open('population.json', 'w') as f:
    json.dump(formatData, f)