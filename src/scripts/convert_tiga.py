# Python program to read
# json file
  
  
import json
  
# Opening JSON file
f = open('data/tiga.json',)
  
# returns JSON object as 
# a dictionary
data = json.load(f)


formatData = {
    "fields": [
        {"name": "title", "format": "", "type":"string"},
        {"name": "expertise", "format": "", "type":"string"},
        {"name": "latitude", "format": "", "type":"number"},
        {"name": "longitude", "format": "", "type":"number"},

    ],
    "rows" : [

    ]
}
# Iterating through the json
# list
loop = 0
for i in data['features']:
    loop = loop +1 
    name = i['properties']['title']
    expertise = i['properties']['expertise']
    lat = i['geometry']['coordinates'][0]
    long = i['geometry']['coordinates'][1]

    formatData["rows"].append({0 : name, 1: expertise, 2: long, 3:lat})
    '''if loop == 5:
        print(formatData)
        exit()'''
    #print(formatData)
# Closing file
f.close()

with open('tiga.json', 'w') as f:
    json.dump(formatData, f)