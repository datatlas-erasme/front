# Backend


## API Routes 

### Test backend

- **URL**
/api/data/test/

- **Method**
`GET`

- **Success Response:**
	Returns test string
	- **Code**: 200
	- **Content**:
	`test`


### Get the kepler configuration 

- **URL**
/api/conf/kepler

- **Method**
`GET`

- **Success Response:**
	Returns a kepler.gl formated json of the dataset
	- **Code**: 200
	- **Content**:
```json
{
	"version": "v1",
	"config": {
		"visState": {},
		"mapState": {},
		"mapStyle": {}
	}
}
```

### Get the instance configuration 

- **URL**
/api/conf/kepler

- **Method**
`GET`

- **Success Response:**
	Returns a kepler.gl formated json of the dataset
	- **Code**: 200
	- **Content**:

```json 
{
  "siteTitle": "Instance Name",

  "mapboxToken": "mapboxToken",
  "defaultMapLocation": {
	  "latitude": 0,
	  "longitude": 0,
	  "zoom": 10
  },
  "defaultMapBoxStyleUrl": "mapbox://styles/yourmapboxstyle",
  "modules": {
	  "exportDataBtn": true
  },
  "theme": {
	  "filterSidePanel": {
		  "buttonColorRange": [
			  "#dc7e6d",
			  "#69b59d",
			  "#c3c356"
		  ]
	  }
  },
  "bottomRightButtons": [
	  {
		  "text": "hey im a button",
		  "url": "url"
	  },
	  {
		  "text": "hey im a button",
		  "url": "url"
	  }
  ],
  "layers": [
	  {
		  "name": "layerName",
		  "type": "notion",
		  "url": "notionUrl",
		  "id": 0
	  },
	  {
		  "name": "GeoJson Data api",
		  "type": "geojson",
		  "url": "url",
		  "id": 1
	  }
  ]
}
```



### Update the kepler configuration 

- **URL**
/api/conf/kepler

- **Method**
`POST`

- **Data Constrains**

	The kepler json is created trough the kepler interface

	**body:** `form-data`
	**key:** `configuration_kepler`

	**value:**
```json
{
	"version": "v1",
	"config": {
		"visState": {},
		"mapState": {},
		"mapStyle": {}
	}
}
```


- **Success Response:**
	- **Code**: 200
	- **Content**:
```json

```

### Update the instance configuration

- **URL**
/api/conf/instance

- **Method**
`POST`

- **Data Constrains**

	The kepler json is created trough the kepler interface

	**body:** `form-data`
	**key:** `configuration_instance`

	**value:**
```json 
	{
	  "siteTitle": "Instance Name",

	  "mapboxToken": "mapboxToken",
	  "defaultMapLocation": {
		  "latitude": 0,
		  "longitude": 0,
		  "zoom": 10
	  },
	  "defaultMapBoxStyleUrl": "mapbox://styles/yourmapboxstyle",
	  "modules": {
		  "exportDataBtn": true
	  },
	  "theme": {
		  "filterSidePanel": {
			  "buttonColorRange": [
				  "#dc7e6d",
				  "#69b59d",
				  "#c3c356"
			  ]
		  }
	  },
	  "bottomRightButtons": [
		  {
			  "text": "hey im a button",
			  "url": "url"
		  },
		  {
			  "text": "hey im a button",
			  "url": "url"
		  }
	  ],
	  "layers": [
		  {
			  "name": "layerName",
			  "type": "notion",
			  "url": "notionUrl",
			  "id": 0
		  },
		  {
			  "name": "GeoJson Data api",
			  "type": "geojson",
			  "url": "url",
			  "id": 1
		  }
	  ]
	}
```
		

- **Success Response:**
	- **Code**: 200
	- **Content**:
```json

```




### Get a formated dataset

- **Platform Name:**
	For now the only platform supported by the back is notion

- **URL**
/api/data/{platform_name}/{datasetId}


- **Method**
`GET`

- **Success Response:**
	Returns a kepler.gl formated json of the dataset
	- **Code**: 200
	- **Content**:
	
	`{
		fields: {},
		rows: {}
	}`

