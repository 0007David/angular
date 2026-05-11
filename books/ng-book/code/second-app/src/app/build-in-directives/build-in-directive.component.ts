import { Component } from "@angular/core";

interface ClassObjInterface {
    bordered: boolean;
}

@Component({
    selector: 'app-build-in-directive',
    template: `

    <h1 class="ui horizontal divider header">Hello Directive NgIf!</h1>
    <div *ngIf="false"> Displayed</div> <!-- never displayed -->
    <div *ngIf="a > b">a > b</div> <!-- displayed if a is more than b -->
    <div *ngIf="str == 'yes'">str == 'yes'</div> <!-- displayed if str is the string "yes" -->
    <div *ngIf="myFunc()">myFunc()</div>

    <div class="container">
        <div *ngIf="myVar == 'A'">Var is A</div>
        <div *ngIf="myVar == 'B'">Var is B</div>
        <div *ngIf="myVar != 'A' && myVar != 'B'">Var is something else</div>
    </div>

    <h1 class="ui horizontal divider header">Hello Directive NgSwitch!</h1>

    <div class="container" [ngSwitch]="myVar">
        <div *ngSwitchCase="'A'">Var is A</div>
        <div *ngSwitchCase="'B'">Var is B</div>
        <div *ngSwitchCase="'C'">Var is C</div>
        <div *ngSwitchDefault>Var is something else</div>
    </div>

    <h1 class="ui horizontal divider header">Hello Directive NgStyle!</h1>
    <div [style.background-color]="'yellow'">
        Uses fixed yellow background
    </div>
    <div [ngStyle]="{'color': 'white', 'background-color': 'blue'}">
        Uses fixed white text on blue background
    </div>
    <div class="ui input">
        <input type="text" name="color" value="{{color}}" #colorinput>
    </div>

    <div class="ui input">
        <input type="text" name="fontSize" value="{{fontSize}}" #fontinput>
    </div>

    <button class="ui primary button"
        (click)="apply(colorinput.value, fontinput.value)">
        Apply settings
    </button>

    <div>
        <span [ngStyle]="{color: color}" [style.font-size.em]="fontSize">
        red text
        </span>
    </div>

    <h4 class="ui horizontal divider header">
        ngStyle with object property from variable
    </h4>

    <div>
        <span [ngStyle]="{color: color}">
            {{ color }} text
        </span>
    </div>

    <h4 class="ui horizontal divider header">
        style from variable
    </h4>

    <div [style.background-color]="color"
        style="color: white;">
        {{ color }} background
    </div>
    <h1 class="ui horizontal divider header">Hello Directive NgClass!</h1>
    <div [ngClass]="{bordered: false}">This is never bordered</div>
    <div [ngClass]="{bordered: true}">This is always bordered</div>
    <div [ngClass]="{bordered: isBordered}">
        Using object literal. Border {{ isBordered ? "ON" : "OFF" }}
    </div>
    <div [ngClass]="classesObj">
        Using object var. Border {{ classesObj.bordered ? "ON" : "OFF" }}
    </div>

    <div class="base" [ngClass]="classList">
        This will always have a blue background and
        round corners
    </div>
    <div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special.</div>

    <h1 class="ui horizontal divider header">Hello Directive NgFor!</h1>


    <h4 class="ui horizontal divider header">
        Simple list of strings
    </h4>

    <div class="ui list" *ngFor="let c of cities">
        <div class="item">{{ c }}</div>
    </div>


    `
})
export class BuildInDirectiveComponent {

    a: number = 2;
    b: number = 1;
    str: string = 'yes';

    myFunc(): boolean {
        return true;
    }

    myVar: string = 'A';

    color: string = 'red';
    fontSize: string = '2';

    apply(color: string, fontSize: string): void {
        this.color = color;
        this.fontSize = fontSize;
    }

    isBordered: boolean = true;
    classesObj!: ClassObjInterface;
    // classList: string[];
    classList: Record<string, boolean> = {}

        cities: string[] = [];

    constructor() {
        this.isBordered = false;
        this.classList = { 'blue': true, 'round': true };
    }
    ngOnInit() {
        this.toggleBorder();
        this.isBordered = false;
        this.classList = { 'blue': true, 'round': true };
        this.setCurrentClasses();
        this.cities = ['Miami', 'Sao Paulo', 'New York'];
    }

    toggleBorder(): void {
        this.isBordered = !this.isBordered;
        this.classesObj = {
            bordered: this.isBordered
        };

    }

    currentClasses: Record<string, boolean> = {};
    /* . . . */
    setCurrentClasses() {
        // CSS classes: added/removed per current state of component properties
        this.currentClasses = {
            blue: true,
            base: false,
            round: true
        };

    }
}
