# Python program to read
# json file
  
  
import json
  
# Opening JSON file
f = open('data/mediation.json',)
  
# returns JSON object as 
# a dictionary
data = json.load(f)


formatData = {
    "fields": [
        {"name": "title", "format": "", "type":"string"},
        {"name": "description", "format": "", "type":"string"},
        {"name": "adress", "format": "", "type":"string"},
        {"name": "web", "format": "", "type":"string"},
        {"name": "email structure", "format": "", "type":"string"},
        {"name": "téléphone structure", "format": "", "type":"string"},
        {"name": "type de structure", "format": "", "type":"string"},
        {"name": "activités", "format": "", "type":"string"},
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
for i in data:
    loop = loop +1 
    title = i['title']
    description = i['description']
    adress = i['adress']
    web = i['web']
    email = i['email structure']
    tel = i['téléphone structure']
    structType = i['type de structure']
    activities = i['activités']
    expertise = i['expertise']
    latitude = i['latitude']
    longitude = i['longitude']



    formatData["rows"].append(
        {
            0 : title,
            1 : description,
            2 : adress,
            3 : web,
            4 : email,
            5 : tel,
            6 : structType,
            7 : activities,
            8 : expertise,
            9 : latitude,
            10 : longitude,
        }
    )
    '''if loop == 5:
        print(formatData)
        exit()'''
    #print(formatData)
# Closing file
f.close()

with open('mediation.json', 'w') as f:
    json.dump(formatData, f)