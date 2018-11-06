# Angular Material Utils

A set of utility packages for angular (6+) material web applications.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Project Structure

**demos-app**: A demo and test application for all the packages in the repo. The app lives in `projects/demos-app`.

The separate packages lives in separate sub projects:

1. [**ngmat-sorted-table**](./projects/ngmat-sorted-table)
1. [**ngmat-overlay-spinner**](./projects/ngmat-overlay-spinner)

## Development server

Run `npm run start` for a dev server running the test and demo app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build libraries

Run `npm run build-[library name]` whenever a change has been made to the code in the library. During development this has to be done for the test and demo app to pick upp any changes.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `npm run test-[library name]` to execute the library unit tests via [Karma](https://karma-runner.github.io).

Run `npm run test-libs` to execute the unit tests for all libraries once, without watch.

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests on the demo app via [Protractor](http://www.protractortest.org/).

## Packaging

Run `npm run package` to build all libraries and create npm packages ready for publishing.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
