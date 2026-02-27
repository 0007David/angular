import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store';

import { AppState } from './store/app.state';
import { selectContador } from './contador/contador.selectors';
import * as ContadorActions  from './contador/contador.actions';
import { HijoComponent } from './contador/hijo/hijo.component';
import { BehaviorSubject, connectable, delay, filter, first, from, fromEvent, interval, map, multicast, Observable, of, ReplaySubject, scan, Subject, throttleTime } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  imports: [RouterOutlet, HeaderComponent],
})
export class AppComponent implements OnInit {
  
  contador: number = 0;

  // filtering 
  arrayNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  observableNumbers: Observable<number[]> = of(this.arrayNumbers);
  mapData: number[] = [];
  filterData: number[] = [];
  reduceData: number = 0;

  constructor() { }

  ngOnInit(): void {  
      //this._rxJsOverView();
      //this._rxJsObservables();
      //this._rxJsOperators();
      this._rxJsOperatorsFiltering();
  }


  private _rxJsOverView(): void {
    /* Example 1  RXJS  */
    //document.addEventListener('click', () => console.log('Clicked!'));  
    //fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

    /* Example 2  RXJS */
    //let count = 0;
    //document.addEventListener('click', () => console.log(`Clicked ${++count} times`));

    // fromEvent(document, 'click')
    //   .pipe(scan((count) => count + 1, 0))
    //   .subscribe((count) => console.log(`Clicked ${count} times`));

    /* Example 3 flow control 
       operators are filter, delay, debounceTime, take, takeUntil, distinct, distinctUntilChanged */
    let count = 0;
    let rate = 2000;
    let lastClick = Date.now() - rate;
    // document.addEventListener('click', () => {
    //   if (Date.now() - lastClick >= rate) {
    //     console.log(`Clicked ${++count} times`);
    //     lastClick = Date.now();
    //   }
    // });

    // fromEvent(document, 'click')
    // .pipe(
    //   throttleTime(rate),
    //   scan((count) => count + 1, 0)
    // )
    // .subscribe((count) => console.log(`Clicked ${count} times`));

    /* Example 4 Change de values
       Other value producing operators are pluck, pairwise, sample */
    // document.addEventListener('click', (event) => {
    //   if (Date.now() - lastClick >= rate) {
    //     count += event.clientX;
    //     console.log(count);
    //     lastClick = Date.now();
    //   }
    // });

    // fromEvent<MouseEvent>(document, 'click')
    // .pipe(
    //   throttleTime(rate),
    //   map((event) => event.clientX),
    //   scan((count, clientX) => count + clientX, 0)
    // )
    // .subscribe((count) => console.log(count));
  }

  private _rxJsObservables(): void {
    /* Example 1: 
       The following is an Observable that pushes the values 1, 2, 3 immediately 
       (synchronously) when subscribed, and the value 4 after one second has passed since 
       the subscribe call, then completes:
     */
    
    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });
    // console.log('just before subscribe');
    // observable.subscribe({
    //   next(x) {
    //     console.log('got value ' + x);
    //   },
    //   error(err) {
    //     console.error('something wrong occurred: ' + err);
    //   },
    //   complete() {
    //     console.log('done');
    //   },
    // });
    // console.log('just after subscribe');

    /* Example 2
     
     */
    // const foo = new Observable((subscriber) => {
    //   console.log('Hello');
    //   subscriber.next(42);
    // });
    
    // foo.subscribe((x) => {
    //   console.log(x);
    // });
    // foo.subscribe((y) => {
    //   console.log(y);
    // });

    /*
    Example 4: 

    */
      const foo2 = new Observable((subscriber) => {
      console.log('Hello');
      subscriber.next(42);
      subscriber.next(100);
      subscriber.next(200);
    });

    console.log('before');
    foo2.subscribe((x) => {
      console.log(x);
    });
    console.log('after');

    // const foo3 = new Observable((subscriber) => {
    //   console.log('Hello');
    //   subscriber.next(42);
    //   subscriber.next(100);
    //   subscriber.next(200);
    //   setTimeout(() => {
    //     subscriber.next(300); // happens asynchronously
    //   }, 1000);
    // });

    // console.log('before');
    // foo3.subscribe((x) => {
    //   console.log(x);
    // });
    // console.log('after');

    // const observable = new Observable(function subscribe(subscriber) {
    //   const id = setInterval(() => {
    //     subscriber.next('hi');
    //   }, 5000);
    // });

    const observable1 = new Observable(function subscribe(subscriber) {
      try {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        //throw new Error('Error Unknown');
        subscriber.complete();
        subscriber.next(4);
      } catch (err) {
        subscriber.error(err); // delivers an error if it caught one
      }
    });

    //observable1.subscribe((x) => console.log(x));
    const observer = {
      next: (x: any)  => console.log('Observer got a next value: ' + x),
      error: (err: any) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    observable1.subscribe(observer);

    /* Example 5: Disposing Observable Executions
       it has to have a way to stop the execution, in order to avoid wasting computation power or memory resources.
    */
   const observable = from([10, 20, 30]);
    const subscription = observable.subscribe((x) => console.log(x));
    // Later:
    subscription.unsubscribe();
    console.log('hello');
    const observable3 = new Observable(function subscribe(subscriber) {
      // Keep track of the interval resource
      const intervalId = setInterval(() => {
        subscriber.next('hi');
      }, 1000);
    
      // Provide a way of canceling and disposing the interval resource
      return function unsubscribe() {
        clearInterval(intervalId);
      };
    });

    const unsubscribe = observable3.subscribe({ next: (x) => console.log(x) });
 
    // Later:
    unsubscribe.unsubscribe(); // dispose the resources
  }

  private _rxJsOperators(): void {
    
    /* Subscription:  A Subscription is an object that represents a disposable resource,
      usually the execution of an Observable. 
      RxJS es el objeto que representa la conexión activa entre un observable y su observador (subscriber)
       RxJS devuelve cuando te suscribes a un observable, y te permite controlar o cancelar esa suscripción.
    */
    // const observable1 = interval(400);
    // const observable2 = interval(300);
    
    // const subscription = observable1.subscribe(x => console.log('first: ' + x));
    // const childSubscription = observable2.subscribe(x => console.log('second: ' + x));
    
    // subscription.add(childSubscription);
    
    // setTimeout(() => {
    //   // Unsubscribes BOTH subscription and childSubscription
    //   subscription.unsubscribe();
    // }, 1000);

    /*  SUBJECT:RxJS es un tipo especial de Observable + Observer a la vez
      Un Subject puede emitir valores a otros (como un observable), y también puede 
      recibir valores (como un observer).
    */
   const subject = new Subject<number>();
 
    subject.subscribe({
      next: (v: number) => console.log(`observerA: ${v}`),
    });
    subject.subscribe({
      next: (v: number) => console.log(`observerB: ${v}`),
    });
    
    subject.next(1);
    subject.next(2);
    console.log('log .....');
     
    const subject1 = new Subject<number>();
 
    subject1.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    subject1.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });
    
    const observable = from([1, 2, 3]);
    
    observable.subscribe(subject1); // You can subscribe providing a Subject

    /*
     Multicasted Observable 
     en RxJS es un observable que comparte su fuente de datos entre múltiples suscriptores.

      Unicast vs Multicast
      unicast: Cada suscripción recibe una nueva emisión independiente
      Multicast: Cada suscripción recibe la misma emisión compartida
     */

    const source = from([1, 2, 3, 4]);
    const subject2 = new Subject<number>();
    //const multicasted = source.pipe(multicast(subject2));
    const connectableSource = connectable(source, { connector: () => subject2 });
    
    // These are, under the hood, `subject.subscribe({...})`:
    connectableSource.subscribe({
      next: (v) => console.log(`observerA : ${v}`),
    });
    connectableSource.subscribe({
      next: (v) => console.log(`observerB : ${v}`),
    });
    
    // This is, under the hood, `source.subscribe(subject)`:
    connectableSource.connect();


    /* BehaviorSubject 
     es un tipo especial de Subject que siempre almacena el último valor
       emitido y lo emite inmediatamente a cualquier nuevo suscriptor.

       Es como una fuente de datos que recuerda el último valor, y si alguien se suscribe tarde, igual recibe ese valor al instante.
    */
   console.log('log BehaviorSubject');
   const subject3 = new BehaviorSubject(0); // 0 is the initial value
    
    subject3.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    
    subject3.next(1);
    subject3.next(2);
    
    subject3.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });
    
    subject3.next(3);

    /*  ReplaySubject
     Recuerda y almacena un número configurable de valores emitidos y los reproduce para 
     nuevos suscriptores, aunque se suscriban tarde.

     Es como una cámara de seguridad: graba las emisiones anteriores, y cuando alguien se suscribe, 
     les muestra la "repetición".
    */
   console.log('log ReplaySubject');
   const subject6 = new ReplaySubject(3); // buffer 3 values for new subscribers
 
    subject6.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    
    subject6.next(1);
    subject6.next(2);
    subject6.next(3);
    subject6.next(4);
    
    subject6.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });
    
    subject6.next(5);

    console.log('Marble Diagrams');
    // const testScheduler = new TestScheduler((actual, expected) => {
    //   expect(actual).toEqual(expected);
    // });
    // it('debe multiplicar por 2', () => {
    //   testScheduler.run(({ cold, expectObservable }) => {
    //     const source$ = cold('--a--b--|', { a: 1, b: 2 });
    //     const expected =    '--x--y--|';

    //     const result$ = source$.pipe(map(x => x * 2));
    //     expectObservable(result$).toBe(expected, { x: 2, y: 4 });
    //   });
    // });

  }
  /** Operators */
  private _rxJsOperatorsFiltering(): void {

    // Operators are functions that take an Observable as input and return a new Observable as output.
    // They allow you to transform, filter, or combine Observables in various ways.
    // Some common operators include map, filter, mergeMap, switchMap, and concatMap.

    /*
    Example 1: the operator called map is analogous to the Array method of the same name. 
    Just as [1, 2, 3].map(x => x * x) will yield [1, 4, 9], the Observable created like this.
     */
    of(1, 2, 3)
    .pipe(map((x) => x * x))
    .subscribe((v) => console.log(`value: ${v}`));
    // Logs: value: 1
    of(1, 2, 3)
    .pipe(first())
    .subscribe((v) => console.log(`value: ${v}`));
    console.log('log ...');
    of(1, 2, 3).pipe(delay(1000)).subscribe(console.log);

    console.log('log Filtering map');
    
    this.observableNumbers.pipe(
      map(nums => nums.map(num => num * 2))
    ).subscribe((data) => {
      this.mapData.push(...data);
      console.log('mapData: ', this.mapData);
    });

    this.observableNumbers.pipe(
      map(nums => nums.filter(num => num % 2 === 0))
    ).subscribe((data) => {
      this.filterData.push(...data);
      console.log('filterData: ', this.filterData);
    });

    this.observableNumbers.pipe(
      map(nums => nums.reduce((num, acc)=> num + acc, 0 ))
    ).subscribe((data) => {
      this.reduceData = data;
      console.log('reduceData: ', this.reduceData);
    });
  }

  private _rxJsOperatorsCombining(): void {
    // Combining operators allow you to merge multiple Observables into one, 
    // or to combine their values in various ways.
    // Some common combining operators include merge, concat, zip, and combineLatest.

    // Example: Combine two Observables using combineLatest
    // const observable1 = of(1, 2, 3);
    // const observable2 = of('a', 'b', 'c');
    
    // combineLatest([observable1, observable2])
    //   .subscribe(([num, char]) => console.log(`${num} - ${char}`));
  }
}
