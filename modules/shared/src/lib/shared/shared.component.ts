import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from "../stepper/stepper.component";

@Component({
  selector: 'eta-shared',
  imports: [CommonModule, StepperComponent],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedComponent {}
