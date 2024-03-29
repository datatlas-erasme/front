# Front

## Code style

ESlint is configured with a basic code style, including React hooks dependency hints.

VSCode can display the ESlint errors and warnings thanks to the ESlint extension.

This extension includes a formatter to automatically reformat written code based on the code style.

## Use DatAtlas Kepler custom package

DatAtlas needs a custom version of Kepler where a column can have multiple values. This is achieved by using a JSON value.

Having an array value represented as a JSON is specific to DatAtlas and may not be fitted for every projects. 
This is why the custom Kepler cannot be the subject of a GitHub PR, and should stay as a standalone until a consensus on what is an array value in CSV can be.

Next sections describe how to deal with this for developing and building DatAtlas.

### Without modifying the package.json

DatAtlas Kepler custom package must be cloned next to the Front folder, in the system where the Front will be built.

Then for the Kepler side:

```
cd kepler.gl
yarn install
yarn run build
yarn link # may need sudo
```

And for the Front side:

```
cd ../front/src
yarn install
yarn link kepler.gl
yarn build # or yarn start
```

### Configuration

__Datatlas__ use 2 configuration files one directly used by __Kepler.gl__ `api/conf/kepler` and another used by __Datatlas__ `api/conf/instance`.
These files are normally fetched from __Datatlas__ back but you may create these files in your `public/api/conf` directory
to work locally without running the server. In such case you must adapt your `.env` to fetch from them there :
```
REACT_APP_BACKEND_URL='http://localhost:3000'
```


### By modifying the package.json

This implies pushing a different package.json than the one actually versioned and should be the result of a team decision.

Several solutions there :

1. Chosen solution: the Kepler custom package must be built and pushed (dist/ folder included) to Github, then the simplified Github URL format can be used as the dependency version : `"kepler.gl": "datatlas-erasme/kepler.gl",` [see on NPM doc](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#github-urls). Maybe the easiest to do but implies pushing the dist/ folder.
2. The Kepler custom package must be built and published to NPM with a different name (or under a @datatlas scope), and the dependency should refer to this NPM package. The least easy to maintain but the more robust.
3. Similar to the link solution, the Kepler custom package must be cloned next to the Front folder, in the system where the Front folder will be built, then the dependency can point to this folder : `"kepler.gl": "../../kepler.gl",` [see on NPM doc](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#github-urls). Not great, every developers and build envs must have the same folder structure...
