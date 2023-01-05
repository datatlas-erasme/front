# Front

## Code style

ESlint is configured with a basic code style, including React hooks dependency hints.

VSCode can display the ESlint errors and warnings thanks to the ESlint extension.

This extension includes a formatter to automatically reformat written code based on the code style.

## Kepler

__Datatlas__ was using a forked version of __Kepler__ but this is no longer required.

DatAtlas required a custom version of Kepler where a column can have multiple values. This was achieved by using a JSON value.

Having an array value represented as a JSON is specific to DatAtlas and may not be fitted for every projects. 
This is why the custom Kepler cannot be the subject of a GitHub PR, and should stay as a standalone until a consensus on what is an array value in CSV can be.
> https://github.com/keplergl/kepler.gl/pull/1666
> https://github.com/keplergl/kepler.gl/issues/1637
