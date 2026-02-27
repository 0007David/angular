import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent implements OnInit {
  
  counter: number = 10;
  counterSignal = signal(0);

  ngOnInit(): void {
    setInterval(() => {
      this.counter += 1;
      console.log('counterSignal:');
      
    }, 2000);
  }

  incrementBy(value: number): void {
    this.counter += value;
    //this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update(current => current + value);
    console.log('Counter:', this.counter, 'Counter Signal:', this.counterSignal());
  }

  resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0);
    console.log('Counter reset to:', this.counter, 'Counter Signal reset to:', this.counterSignal());
  }

}
