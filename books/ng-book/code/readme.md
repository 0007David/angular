# List of content

## How to Read this Book

## Writting Your first angular Web Application
- Simple Reddit Clone
- Getting Started
- Running the application
  - Making a Component
  - Importing Dependencies
  - Component Decorators
  - Loading Our Component
- Adding Data to the Component
  - Property
  - A constructor
  - Rendering The template

- Working with arrays 
  - In our template use syntax [*ngFor](https://github.com/angular/angular/blob/main/packages/common/src/directives/ng_for_of.ts), the idea is repeat the same markup for a collection of objects.

- Using the User Item Component
  - Rendering User Item
  - Accepting Inputs
  - Passing an input value
- Bootstrapping Crash Course
  - Angular module system: @NgModule
    - deckarations: which components are defined in this module.
    - imports: which dependencies this module has.
    - providers: to make a service available to be injected throughout our application
    - bootstrap: this module is used to bootstrap an app, load the AppComponent in BrowserModule
  - import vs imports?
    - import → code-level access (TypeScript/ES6)
      - Brings a symbol (class, function, etc.) into the file scope
      - Lets you use it in your code
      - Has no effect on Angular’s runtime behavior by itself
    - imports → Angular feature wiring (templates + DI + module system)
      - Make the exported declarations from these modules available here
      - Register providers (services) from these modules for dependency injection
      - Allow me to use their directives/pipes/components in my templates

- Expanding our Application
  - Adding CSS
- The application Component
  - Add Interaction
  - Binding inputs to values
  - Binding actions to events
  - Defining the Action Logic
- Adding the Article Component

## TypeScript


