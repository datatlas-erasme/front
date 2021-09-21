# Datagora Viz Tool


[![build-publish-master-container](https://github.com/urbanlab/datagora_kepler/actions/workflows/push_docker_master.yml/badge.svg)](https://github.com/urbanlab/datagora_kepler/actions/workflows/push_docker_master.yml)

[![build-publish-dev-container](https://github.com/urbanlab/datagora_kepler/actions/workflows/push_docker_dev.yml/badge.svg)](https://github.com/urbanlab/datagora_kepler/actions/workflows/push_docker_dev.yml)



# TODO
- [ ] On dockerfile if target dev do not compile for build
- [ ] Remove the first src folder not usefull 

# Setup

## Production
> docker run erasme/datatlas
## Developpement

### Docker
The easiest way to launch the datagora project can be by using docker-compose

copy the file **.env.example** and rename it **.env**
In the **.env** file change the **REACT_APP_MAPBOX_API** value and add your own Mapbox API Token


> docker-compose up

Now you can access the server trough http://localhost:5007

 

 # Instance config
 [WIP]
 The default display can be configured trough two files
 
 **themeConf.json**
 This file can modifify the primary colors for bg/panels/text sections

 **defaultDisplay.conf**
 This file defines how and wich data layers are displayed and filtered by default


**instanceConf.json**
For now you can only define a defined number of dataset, this wont be the case in future updates

```json

{
    "layers": {
        "layer1" : {
            "name" : "velov",
            "server" : "openDataLyon",
            "url" : "https://download.data.grandlyon.com/wfs/ldata?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=velov.stations&outputFormat=application/json;%20subtype=geojson&SRSNAME=EPSG:4171&startIndex=0&count=100"

        },
        "layer2" : {
            "name" : "mediation",
            "server" : "geoserver",
            "url" : "http://geoserver.ud-reproducibility.datagora.erasme.org/geoserver/erasme/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=erasme%3Amediation&maxFeatures=50&outputFormat=application%2Fjson"

        }
    }
  }


```
.

