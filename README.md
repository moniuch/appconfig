# Appconfig

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

It is an experiment how to use `APP_INITIALIZER` together with a service for loading a JSON file at the bootstrap time, so to configure the app instance.
The scenario we want to address is to be able to re-use the same single build for _n_ different servers/domains.

## Development build

1. The `environment.ts` file contains `isLocal: true`
2. AppConfigService loads `appConfig.json` from `/src/appConfig.json`
3. Run `ng serve` as usual

## Production build

1. The `environment.prod.ts` file contains `isLocal: false` 
2. Run `ng build --prod --aot`
3. Serve the build by running `http-serve dist/appconfig` - click the URL it offers when the server is ready 
4. As the app does not have any configuration, the promise will reject and the default message `no configuration` will be displayed
5. Now drop `appConfig.json` into the build director (`dist/appconfig`) and reload the browser window - the app should load.

## How to best write tests for the service and app component


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
