import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public title: string = 'Contador';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
