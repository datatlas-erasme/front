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
        {"name": "icon", "format": "", "type":"string"},
        {"name": "img", "format": "", "type":"string"},

    ],
    "rows" : [

    ]
}
# Iterating through the json
# list
loop = 0
for i in data:
    loop = loop +1 
    title = i['nom-structure']
    description = i['description']
    adress = i['adresse']
    web = i['site-web']
    email = i['email-structure']
    tel = i['telephone-structure']
    structType = i['type-structure']
    activities = i['activites']
    expertise = i['expertise']
    latitude = i['latitude']
    longitude = i['longitude']
    img = i['image du lieu']



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
            11 : img
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