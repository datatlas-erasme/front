# Back server


## API Routes WIP

### Get a dataset

- **URL**
/api/data/{datasetId}

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


### Udpate the layers conf

- **URL**
/api/conf/


### Udpate the instance conf