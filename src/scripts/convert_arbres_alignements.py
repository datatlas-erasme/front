# Python program to read
# json file
  
  
import json
  
# Opening JSON file
f = open('data/abr_arbres_alignement.abrarbre.json',)
  
# returns JSON object as 
# a dictionary
data = json.load(f)


formatData = {
    "fields": [
        {"name": "essencefrancais", "format": "", "type":"string"},
        {"name": "anneeplantation", "format": "", "type":"number"},
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
    name = i['properties']['essencefrancais']
    try:
        anneeplantation = i['properties']['anneeplantation']
    except:
        anneeplantation = 1850
        print("No data found in annee plantation, skipping")
    lat = i['geometry']['coordinates'][0]
    long = i['geometry']['coordinates'][1]

    formatData["rows"].append({0 : name, 1:anneeplantation, 2: long, 3:lat})
    '''if loop == 5:
        print(formatData)
        exit()'''
    #print(formatData)
# Closing file
f.close()

with open('trees.json', 'w') as f:
    json.dump(formatData, f)