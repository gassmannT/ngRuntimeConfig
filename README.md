# Runtime Config Example

In many projects, there is a need to be able to change configurations at runtime.
With the Angular CLI there is the option that configurations can be controlled via `environment.ts`. However, this always requires a new build and can only be made difficult via a build or release pipeline.

## Structure

The following files are affected

- `scr/config.json`: Runtime config as a JSON file. The structure corresponds to the environment.ts file.\
  Note: You can add all configs but you do not have to
- `src/app.service.ts`: Contains the logic of loading the `config.json` from the server and if necessary update the environment object.
- `app.module.ts`: Contains the factory method and the initialization of the runtime config with APP_INITIALIZER token.\
  About APP_INITIALIZER (from the Angular Docs): The provided functions are injected at application startup and executed during app initialization. If any of these functions returns a Promise, initialization does not complete until the Promise is resolved.
- `angular.json`: Add the `config.json` to the assets array
