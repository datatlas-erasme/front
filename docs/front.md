# Front

## Use DatAtlas Kepler custom package

DatAtlas needs a custom version of Kepler where a column can have multiple values. This is achieved by using a JSON value.

Having an array value represented as a JSON is specific to DatAtlas and may not be fitted for every projects. This is why the custom Kepler cannot be the subject of a GitHub PR, and should stay as a standalone until a consensus on what is an array value in CSV can be.

Next sections describe how to deal with this for developing and building DatAtlas.

### Without modifying the package.json

DatAtlas Kepler custom package must be cloned next to the Front folder, in the system where the Front will be built.

Then for the Kepler side:

```
cd kepler.gl
yarn install
yarn run build
```

And for the Front side:

```
cd ../front/src
npm install
npm link ../../kepler.gl # may need sudo
npm run build # or npm start
```

### By modifying the package.json

This implies pushing a different package.json than the one actually versioned and should be the result of a team decision.

Several solutions there :

1. The Kepler custom package must be built and published to NPM with a different name (or under a @datatlas scope), and the dependency should refer to this NPM package. The least easy to maintain but the more robust.
2. The Kepler custom package must be built and pushed (dist/ folder included) to Github, then the simplified Github URL format can be used as the dependency version : `"kepler.gl": "datatlas-erasme/kepler.gl",` [see on NPM doc](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#github-urls). Maybe the easiest to do but implies pushing the dist/ folder.
3. Similar to the link solution, the Kepler custom package must be cloned next to the Front folder, in the system where the Front folder will be built, then the dependency can point to this folder : `"kepler.gl": "../../kepler.gl",` [see on NPM doc](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#github-urls). Not great, every developers and build envs must have the same folder structure...
