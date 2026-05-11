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

- - Falt completar

- Using the article Component
  - JavaScript, by default, propagates the click event to all the parent components. Because the click event is propagated to parents, our browser is trying to follow the empty link, which tells the browser to reload.
  - Bubbling → el evento sube por el DOM
  - preventDefault() → evita acción del navegador
  - stopPropagation() → evita que suba


- Referencias
  - http://reddit.com
  - http://producthunt.com
  - [Angular NgFor](https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_for_of.ts)
  - http://semantic-ui.com/
  - http://foundation.zurb.com
  - http://getbootstrap.com
  - http://semantic-ui.com/collections/grid.html
  - http://en.wikipedia.org/wiki/Law_of_Demeter
  - http://weblog.jamisbuck.org/2006/10/18/skinny-controller-fat-model
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

  - https://zeit.co/now

## TypeScript

- - falta completar

## How Angular Works

- Aplication
  - The first big idea is that an Angular application is made up of Components. 
  - Application is nothing more than a tree of Components. Components is that they’re composable.
  - 

- How to use this chapter
  - How to break your app into components
  - How to make reusable components using inputs
  - How to handle user interactions, such as clicking on a component

- Product Model
  - support many different kinds of models (and data
architectures).

- Components
  - Component Decotators
  - A View
  - A Controller
    - Controller is defined by a class, the AppComponent class, in this case.
  

- Component Decorators
  - a selector, which tells Angular what element to match
  - a template, which defines the view
    - declare the HTML template that the component will use
  - Data flows in to your component via input bindings and events flow out of your component through output bindings.

- The productListComponent
  - Component inputs: specify the parameters we expect our component to receive
  - Component outputs: 
    - EventEmitter: a class that allows us to emit events from our component
- The ProductRowComponent
  

- The ProductImageComponent
- The PriceDisplayComponent
- The ProductDepartmentComponent
- NgModule and Booting the App
- Booting the app

- A Word on Data Architecture
  - The only tools we’ve talked about are emitting output events
  - the default option was two-way data binding
  - You might handle this scenario would be to create a ShoppingCartService
  - Use an Observables-based architecture like RxJS
  - Use a Flux-based architecture like Redux or NgRx

- References
- https://learnxinyminutes.com/docs/typescript/
- https://angular.io/docs/ts/latest/guide/style-guide.html
- https://en.wikipedia.org/wiki/Observer_pattern

## Built-in Directives

Directives are classes that add additional behavior to elements in your Angular applications

- There are three kinds of directives in Angular:
  - Component: a directive with a template.
  - Attribute directive: change the appearance or behavior of an element, component, or another directive.
  - Structural directive: change the DOM layout by adding and removing DOM elements.

- NgIf 
- NgSwitch
- NgStyle
- NgClass
  - Angular applies the classes on initialization (onInit) and in case of changes. 

pag. 148/ 177
