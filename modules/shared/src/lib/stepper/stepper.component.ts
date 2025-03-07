import { Component, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eta-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  // Input signals
  step = input<number>(1); // Step size for increment/decrement
  min = input<number>(0); // Minimum value
  max = input<number>(100); // Maximum value
  
  // Model signal for two-way binding
  value = model<number>(0);

  increment(): void {
  }

  decrement(): void {
    const newValue = this.value() - this.step();
    if (newValue >= this.min()) {
      this.value.set(newValue);
    }
  }
} 